---
title: "Javascript Tips"
date: '2024-08-15'
spoiler: "uid() // lzv9r2pa6ij4v3lz6jt"
---

I'll share quick tips with javascript. Let's go.


## Create a unique ID

```js
const uid = () => {
  const head = Date.now().toString(36)
  const tail = Math.random().toString(36).substr(2)
  return head + tail
}

uid() // lzv9r2pa6ij4v3lz6jt
```

You don't have to install packages that is related to create unique id.
This is fast and easy way to create unique id using javascript.

## How to implement method chaning

```js
class Person {
  log() {
    console.log(this.is)
    return this
  }
  walk() {
    this.is = 'walking'
    return this
  }
  run() {
    this.is = 'running'
    return this
  }
}

const person = new Person()
person
  .walk()
  .log() // walking
  .run()
  .log() // running
```

## Creating a range using generator functions

```js
const range = (end, start = 0, step = 1) => {
  function* generateRange() {
    let x = start - step;
    while (x < end - step) yield (x += step);
  }

  return {
    [Symbol.iterator]: generateRange,
  };
};

const range1 = [...range(7)] 
// [0, 1, 2, 3, 4, 5, 6]
const range2 = [...range(10, 4)] 
// [4, 5, 6, 7, 8, 9]
const range3 = [...range(12, 0, 2)]
// [0, 2, 4, 6, 8, 10]
```

Now we can produce various kinds of ranges. 🙌

## Check network status

```js
if (navigator.onLine) {
  console.log('online')
} else {
  console.log('offline')
}
```

You can get current status.

## Redirecting user

```js
const redirect = (url) => (location.href = url)
```

You can redirect the user to any specific URL using javascript.

## How to check if an object is empty in javascript

```js
const obj = {}
const isEmpty = Object.keys(obj).length === 0
console.log(isEmpty) // true
```

## Wrap Up

I think it's not a big deal, but I believe they're useful tips.