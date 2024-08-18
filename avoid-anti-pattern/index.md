---
title: "Avoid Anti-Patterns"
date: '2024-08-15'
spoiler: "const bigNumber = 123_948_012_394_812"
---

I've been working as a frontend engineer for about 10 years. I think I need to share my experience, which is related to code, with others. Even though everything I share with is not good answers, I hope it should be useful for frontend engineers.

## Get value as number from a number input

```jsx /valueAsNumber/#green
function App() {
  const onChange = (event) => {
    const { value, valueAsNumber } = event.target
    console.log(ParseInt(value)) //  ❌ Bad
    console.log(valueAsNumber) // ✅ Good
  }

  return (
    <div>
      <input type="number" onChange={onChange} />
    </div>
  )
}
```

You can simply get the value as a number without tranforming it.

## Add names to your useEffects in React

```jsx {3-5}
function App() {
  // ❌ Bad
  useEffect(() => {
    // Do something complicated logic
  }, [])

  // ✅ Good
  const configEffect = useCallback(() => {
    // Do something logic
  }, [])

  const anotherEffect = useCallback(() => {
    // Do something logic
  }, []) 

  useEffect(configEffect, [configEffect])
  useEffect(anotherEffect, [anotherEffect])
}
```

I used to write **anonymous functions** when creating `useEffects`. However It took a little bit long time to understand what is going on. We need to deep-dive inside the code. So I strongly recommend it should be _give it a name_ with `useCallback` that maintain its behaviour. As a result, code readability is improved.

## Use numeric separators to keep large numbers readable

```js {2}
const bigNumber = 123948012394812 // ❌ Bad
const bigNumber = 123_948_012_394_812 // ✅ Good
```

It's easy to make sense of large numbers with `_`.

## :is() selector tip

```css {5} {13}
header p, header h2, header button { /* ❌ Bad */
  color: red;
}

header :is(p, h2, button) { /* ✅ Good */
  color: red;
}

header p, footer p, section p { /* ❌ Bad */
  color: red;
}

:is(header, footer, section) p { /* ✅ Good */
  color: red;
}
```

`:is` selector helps to make shorter and more readable code.

## Dealing with union types

```ts
type Profile = {
  age: number;
}

type Information = {
  male: boolean;
}

function getLog(user: Profile | Information) {
  if (user.age) { // ❌ Bad
  }

  if ('age' in user) { // ✅ Good
    console.log(user.age)
  }
}
```

**Union type** is powerful tool, but they can cause some errors. Be careful of union types that have no properties in common.

## Define a component

```jsx
// ❌ Bad
function ParentComponent() {
  function ChildComponent() {

  }
  return <div><ChildComponent /></div>
}

// ✅ Good
function ChildComponent() {

}
function ParentComponent() {
  return <div><ChildComponent /></div>
}
```

Although it's convenient to define a component inside another component, We don't have to define it like this pattern. Because it may cause performance issue. **So define it at the top level of the file or module.**

## Avoid provider wrapping hell

```jsx {18-32}
// ❌ Bad
const root = createRoot(document.getElementById('root'))
root.render(
  <ThemeContext.Provider>
    <UserContext.Provider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <IntlProvider locale={usersLocale}>
            <App />
          </IntlProvider>
        </Provider>
      </QueryClientProvider>
    </UserContext.Provider>
  </ThemeContext.Provider>
)

// ✅ Good
const buildProvidersTree = (componentsWithProps) => {
  const initialComponent = ({ children }) => <>{children}</>
  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        )
      }
    },
    initialComponent
  )
}
const ProvidersTree = buildProvidersTree([
  [ThemeContext.Provider],
  [UserContext.Provider],
  [QueryClientProvider, { client: queryClient }],
  [ReduxProvider, { store }]
  [IntlProvider, { locale: usersLocale }]
])
const root = createRoot(document.getElementById('root'))
root.render(
  <ProvidersTree>
    <App />
  </ProvidersTree>
)
```

Provider wrapping hell is uncomfortable to read code. Instead, using composition for all providers makes the code easier to work with and more comfortable for everyone.

## Destructure from property that might be undefined

```ts {5} /?? {}/#green
const user = {
  name: undefined
}
// ❌ Bad
const { first, last } = user?.name

// ✅ Good
const { first, last } = user?.name ?? {}
```

Although we are using optional chaining, we receive a TypeError if name is undefined. Instead Use the **nullish coalescing operator** we can avoid the TypeError if name is undefined.

## Use Promise.all()

```js
// ❌ Bad
const user = await getUser()
const products = await getProducts()

// ✅ Good
const [user, products] = await Promise.all([getUser(), getProducts()])
```

This is up to twice as fast.

## Cloning objects in Javascript

```js
const obj = {
  name: {
    first: 'Jaesung',
    last: 'Lee'
  }
}
JSON.parse(JSON.stringify(obj)) // ❌ Bad
structuredClone(object) // ✅ Good
```

Javascript has a native support of deep clone. So we have to use `structuredClone`.

## Add to clipboard with a single line of code

```js
document.execCommand('copy') // ❌ Bad
navigator.clipboard.writeText('npm i react') // ✅ Good
```

No need to copy from the DOM anymore. You can use the `navigator.clipboard.writeText` function to copy text to clipboard.

## Conditional Rendering in React

```jsx
// ❌ Bad
function App() {
  let currentTab = 'first'
  return (
    <>
      {
        currentTab === 'first' ?
        <Profile />
        : currentTab === 'second' ?
        <Setting /> : <Extra />
      }
    </General>
  )
}

// ✅ Good
function App() {
  let renderTab = {
    first: <Profile />,
    second: <Setting />,
    third: <Extra />
  }
  let currentTab = 'profile'
  return renderTab[currentTab]
}
```

It's much better. Smart way!

## Type Guards in Typescript

```ts /animal is Cat/#green
interface Cat {
    meow: () => void;
}

interface Dog {
    bark: () => void;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).meow !== undefined;
}

const animal = getAnimal()

// ❌ Bad
if ('meow' in pet) {
  animal.meow()
} else {
  animal.bark() // 🔴 Error
}

// ✅ Good
if (isCat(animal)) {
  animal.meow()
} else {
  animal.bark()
}
```

You only need to check once and typescript will know which type this animal is in the context. So you need multiple checks.


## Use satisfies

```ts {31}
interface User {
    lastName: string;
    age: number;
}

type ID = string;

type Database = Record<string, User | ID>;

// ❌ Bad
const myData: Database = {
    ryan: 'ID12345',
    joe: {
        lastName: 'kobe',
        age: 39
    }
}

// 🔴 Error: Property 'toLowerCase' does not exist on type 'string | User'.
myData.ryan.toLowerCase()

// ✅ Good
const myData = {
    ryan: 'ID12345',
    joe: {
        lastName: 'kobe',
        age: 39
    }
} satisfies Database

myData.ryan.toLowerCase() // id12345
```

`Satisfies` is possibile to use in TypeScript 4.9. Keep that in mind.

## Wrap Up

I hope the things I shared with should be helpful for other people.
If I have something I want to share, I will continue in this article.

