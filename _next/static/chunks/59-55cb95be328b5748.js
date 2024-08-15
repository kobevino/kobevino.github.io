"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{8390:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(8813);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6570:function(e,t,r){function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8813),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9812:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let n=r(8848),o=r(9533),a=n._(r(1229)),i=r(1450),l=r(874),s=r(6032),u=r(8563),c=r(8390),f=r(2127),d=r(6889),p=r(9280),m=r(6570),h=r(3341),g=r(175),y=new Set;function b(e,t,r,n,o,a){if("undefined"!=typeof window&&(a||(0,l.isLocalURL)(t))){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}(async()=>a?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let x=a.default.forwardRef(function(e,t){let r,n;let{href:s,as:y,children:x,prefetch:w=null,passHref:j,replace:_,shallow:P,scroll:R,locale:O,onClick:C,onMouseEnter:S,onTouchStart:E,legacyBehavior:N=!1,...M}=e;r=x,N&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let k=a.default.useContext(f.RouterContext),L=a.default.useContext(d.AppRouterContext),T=null!=k?k:L,A=!k,I=!1!==w,U=null===w?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:W,as:Y}=a.default.useMemo(()=>{if(!k){let e=v(s);return{href:e,as:y?v(y):e}}let[e,t]=(0,i.resolveHref)(k,s,!0);return{href:e,as:y?(0,i.resolveHref)(k,y):t||e}},[k,s,y]),z=a.default.useRef(W),G=a.default.useRef(Y);N&&(n=a.default.Children.only(r));let B=N?n&&"object"==typeof n&&n.ref:t,[Z,F,D]=(0,p.useIntersection)({rootMargin:"200px"}),q=a.default.useCallback(e=>{(G.current!==Y||z.current!==W)&&(D(),G.current=Y,z.current=W),Z(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[Y,B,W,D,Z]);a.default.useEffect(()=>{T&&F&&I&&b(T,W,Y,{locale:O},{kind:U},A)},[Y,W,F,O,I,null==k?void 0:k.locale,T,A,U]);let K={ref:q,onClick(e){N||"function"!=typeof C||C(e),N&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,o,i,s,u,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?a.default.startTransition(d):d()}(e,T,W,Y,_,P,R,O,A)},onMouseEnter(e){N||"function"!=typeof S||S(e),N&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),T&&(I||!A)&&b(T,W,Y,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},A)},onTouchStart:function(e){N||"function"!=typeof E||E(e),N&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),T&&(I||!A)&&b(T,W,Y,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:U},A)}};if((0,u.isAbsoluteUrl)(Y))K.href=Y;else if(!N||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==O?O:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,m.getDomainLocale)(Y,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);K.href=t||(0,h.addBasePath)((0,c.addLocale)(Y,e,null==k?void 0:k.defaultLocale))}return N?a.default.cloneElement(n,K):(0,o.jsx)("a",{...M,...K,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1295:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1450:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(1733),o=r(6032),a=r(1605),i=r(8563),l=r(8813),s=r(874),u=r(1934),c=r(4409);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),m=p?d.slice(p[0].length):d;if((m.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(m);d=(p?p[0]:"")+t}if(!(0,s.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,u.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:i,params:l}=(0,c.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(r,l)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9280:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(1229),o=r(1295),a="function"==typeof IntersectionObserver,i=new Map,l=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!a,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(u||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),i.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},784:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},2127:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(8848)._(r(1229)).default.createContext(null)},6032:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return l},urlObjectKeys:function(){return i}});let n=r(8214)._(r(1733)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",i=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let c=e.search||s&&"?"+s||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==u?(u="//"+(u||""),i&&"/"!==i[0]&&(i="/"+i)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),""+a+u+(i=i.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return a(e)}},1934:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(2035),o=r(8496)},4409:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let n=r(4037),o=r(9554);function a(e,t,r){let a="",i=(0,o.getRouteRegex)(e),l=i.groups,s=(t!==e?(0,n.getRouteMatcher)(i)(t):"")||r;a=e;let u=Object.keys(l);return u.every(e=>{let t=s[e]||"",{repeat:r,optional:n}=l[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in s)&&(a=a.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:u,result:a}}},8496:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});let n=r(6388),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},874:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=r(8563),o=r(2579);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},1605:function(e,t){function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},1733:function(e,t){function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},4037:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(8563);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(i[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),i}}},9554:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return f},getRouteRegex:function(){return s}});let n=r(6388),o=r(784),a=r(7287);function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function l(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},l=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:n,repeat:s}=i(a[1]);return r[e]={pos:l++,repeat:s,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=i(a[1]);return r[e]={pos:l++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function s(e){let{parameterizedRoute:t,groups:r}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function u(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:a,keyPrefix:l}=e,{key:s,optional:u,repeat:c}=i(n),f=s.replace(/\W/g,"");l&&(f=""+l+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=r()),l?a[f]=""+l+s:a[f]=s;let p=t?(0,o.escapeStringRegexp)(t):"";return c?u?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function c(e,t){let r;let i=(0,a.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),s={};return{namedParameterizedRoute:i.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&a){let[r]=e.split(a[0]);return u({getSafeRouteKey:l,interceptionMarker:r,segment:a[1],routeKeys:s,keyPrefix:t?"nxtI":void 0})}return a?u({getSafeRouteKey:l,segment:a[1],routeKeys:s,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:s}}function f(e,t){let r=c(e,t);return{...s(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=l(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},2035:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let r=o.slice(1,-1),i=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),i=!0),r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function a(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,r),this.optionalRestSlugName=r,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,r),this.restSlugName=r,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,r),this.slugName=r,o="[]"}}this.children.has(o)||this.children.set(o,new r),this.children.get(o)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},8563:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return h},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return s},getLocationOrigin:function(){return i},getURL:function(){return l},isAbsoluteUrl:function(){return a},isResSent:function(){return u},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function l(){let{href:e}=window.location,t=i();return e.substring(t.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Error('"'+s(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},8995:function(e,t,r){r.d(t,{Avatar:function(){return _}});var n=r(9533),o=r(1229),a=r(5638),i=r(3811),l=r(1206),s=r(4252),u=r(730),c=r(5570),f=r(9815);let d=(0,o.createContext)(null),p=d.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let h={},g=(0,i.Z)((e,t)=>{let{spacing:r}=t;return{group:{"--ag-spacing":(0,a.bG)(r)}}}),y=(0,f.d5)((e,t)=>{let r=(0,l.w)("AvatarGroup",h,e),{classNames:o,className:a,style:i,styles:c,unstyled:f,vars:d,spacing:y,...b}=r,v=(0,s.y)({name:"AvatarGroup",classes:m,props:r,className:a,style:i,classNames:o,styles:c,unstyled:f,vars:d,varsResolver:g,rootSelector:"group"});return(0,n.jsx)(p,{value:!0,children:(0,n.jsx)(u.x,{ref:t,...v("group"),...b})})});function b(e){return(0,n.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=e.split(" ");return 1===r.length?e.slice(0,t).toUpperCase():r.map(e=>e[0]).slice(0,t).join("").toUpperCase()}y.classes=m,y.displayName="@mantine/core/AvatarGroup";let x=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],w={},j=(0,i.Z)((e,t)=>{let{size:r,radius:n,variant:o,gradient:i,color:l,autoContrast:s,name:u,allowedInitialsColors:c}=t,f="initials"===l&&"string"==typeof u?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,r=Math.abs(function(e){let t=0;for(let r=0;r<e.length;r+=1)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(v(e)))%t.length;return t[r]}(u,c):l,d=e.variantColorResolver({color:f||"gray",theme:e,gradient:i,variant:o||"light",autoContrast:s});return{root:{"--avatar-size":(0,a.ap)(r,"avatar-size"),"--avatar-radius":void 0===n?void 0:(0,a.H5)(n),"--avatar-bg":f||o?d.background:void 0,"--avatar-color":f||o?d.color:void 0,"--avatar-bd":f||o?d.border:void 0}}}),_=(0,c.b)((e,t)=>{let r=(0,l.w)("Avatar",w,e),{classNames:a,className:i,style:c,styles:f,unstyled:p,vars:h,src:g,alt:y,radius:x,color:_,gradient:P,imageProps:R,children:O,autoContrast:C,mod:S,name:E,allowedInitialsColors:N,...M}=r,k={withinGroup:!!(0,o.useContext)(d)},[L,T]=(0,o.useState)(!g),A=(0,s.y)({name:"Avatar",props:r,classes:m,className:i,style:c,classNames:a,styles:f,unstyled:p,vars:h,varsResolver:j});return(0,o.useEffect)(()=>T(!g),[g]),(0,n.jsx)(u.x,{...A("root"),mod:[{"within-group":k.withinGroup},S],ref:t,...M,children:L?(0,n.jsx)("span",{...A("placeholder"),title:y,children:O||"string"==typeof E&&v(E)||(0,n.jsx)(b,{})}):(0,n.jsx)("img",{...R,...A("image"),src:g,alt:y,onError:e=>{var t;T(!0),null==R||null===(t=R.onError)||void 0===t||t.call(R,e)}})})});_.classes=m,_.displayName="@mantine/core/Avatar",_.Group=y},5523:function(e,t,r){r.d(t,{Button:function(){return Y}});var n=r(9533),o=r(1917),a=r(1229),i=r(5638),l=r(3811),s=r(1206),u=r(4252),c=r(730),f=r(5570),d=r(9061),p=r(9815),m=r(7494),h={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};let g=(0,a.forwardRef)((e,t)=>{let{className:r,...o}=e;return(0,n.jsxs)(c.x,{component:"span",className:(0,m.Z)(h.barsLoader,r),...o,ref:t,children:[(0,n.jsx)("span",{className:h.bar}),(0,n.jsx)("span",{className:h.bar}),(0,n.jsx)("span",{className:h.bar})]})}),y=(0,a.forwardRef)((e,t)=>{let{className:r,...o}=e;return(0,n.jsxs)(c.x,{component:"span",className:(0,m.Z)(h.dotsLoader,r),...o,ref:t,children:[(0,n.jsx)("span",{className:h.dot}),(0,n.jsx)("span",{className:h.dot}),(0,n.jsx)("span",{className:h.dot})]})}),b={bars:g,oval:(0,a.forwardRef)((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(c.x,{component:"span",className:(0,m.Z)(h.ovalLoader,r),...o,ref:t})}),dots:y},v={loaders:b,type:"oval"},x=(0,l.Z)((e,t)=>{let{size:r,color:n}=t;return{root:{"--loader-size":(0,i.ap)(r,"loader-size"),"--loader-color":n?(0,d.p)(n,e):void 0}}}),w=(0,p.d5)((e,t)=>{let r=(0,s.w)("Loader",v,e),{size:o,color:a,type:i,vars:l,className:f,style:d,classNames:p,styles:m,unstyled:g,loaders:y,variant:b,children:w,...j}=r,_=(0,u.y)({name:"Loader",props:r,classes:h,className:f,style:d,classNames:p,styles:m,unstyled:g,vars:l,varsResolver:x});return w?(0,n.jsx)(c.x,{..._("root"),ref:t,...j,children:w}):(0,n.jsx)(c.x,{..._("root"),ref:t,component:y[i],variant:b,size:o,...j})});w.defaultLoaders=b,w.classes=h,w.displayName="@mantine/core/Loader";let j=e=>({in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(.9) translateY(".concat((0,o.h)("bottom"===e?10:-10),")")},transitionProperty:"transform, opacity"}),_={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},"fade-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(30))},transitionProperty:"opacity, transform"},"fade-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(-30))},transitionProperty:"opacity, transform"},"fade-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(".concat((0,o.h)(30))},transitionProperty:"opacity, transform"},"fade-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(".concat((0,o.h)(-30))},transitionProperty:"opacity, transform"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(-20),") skew(-10deg, -5deg)")},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(20),") skew(-10deg, -5deg)")},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(20),") rotate(-5deg)")},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(20),") rotate(5deg)")},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:{...j("bottom"),common:{transformOrigin:"center center"}},"pop-bottom-left":{...j("bottom"),common:{transformOrigin:"bottom left"}},"pop-bottom-right":{...j("bottom"),common:{transformOrigin:"bottom right"}},"pop-top-left":{...j("top"),common:{transformOrigin:"top left"}},"pop-top-right":{...j("top"),common:{transformOrigin:"top right"}}},P={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};var R=r(339),O=r(2743),C=r(1397);function S(e){let{keepMounted:t,transition:r="fade",duration:o=250,exitDuration:i=o,mounted:l,children:s,timingFunction:u="ease",onExit:c,onEntered:f,onEnter:d,onExited:p,enterDelay:m,exitDelay:h}=e,{transitionDuration:g,transitionStatus:y,transitionTimingFunction:b}=function(e){let{duration:t,exitDuration:r,timingFunction:n,mounted:o,onEnter:i,onExit:l,onEntered:s,onExited:u,enterDelay:c,exitDelay:f}=e,d=(0,C.rZ)(),p=(0,O.a)("(prefers-reduced-motion: reduce)",void 0,void 0),m=!!d.respectReducedMotion&&p,[h,g]=(0,a.useState)(m?0:t),[y,b]=(0,a.useState)(o?"entered":"exited"),v=(0,a.useRef)(-1),x=(0,a.useRef)(-1),w=(0,a.useRef)(-1),j=e=>{let n=e?i:l,o=e?s:u;window.clearTimeout(v.current);let a=m?0:e?t:r;g(a),0===a?("function"==typeof n&&n(),"function"==typeof o&&o(),b(e?"entered":"exited")):w.current=requestAnimationFrame(()=>{R.flushSync(()=>{b(e?"pre-entering":"pre-exiting")}),w.current=requestAnimationFrame(()=>{"function"==typeof n&&n(),b(e?"entering":"exiting"),v.current=window.setTimeout(()=>{"function"==typeof o&&o(),b(e?"entered":"exited")},a)})})},_=e=>{if(window.clearTimeout(x.current),"number"!=typeof(e?c:f)){j(e);return}x.current=window.setTimeout(()=>{j(e)},e?c:f)};return!function(e,t){let r=(0,a.useRef)(!1);(0,a.useEffect)(()=>()=>{r.current=!1},[]),(0,a.useEffect)(()=>{if(r.current)return e();r.current=!0},t)}(()=>{_(o)},[o]),(0,a.useEffect)(()=>()=>{window.clearTimeout(v.current),cancelAnimationFrame(w.current)},[]),{transitionDuration:h,transitionStatus:y,transitionTimingFunction:n||"ease"}}({mounted:l,exitDuration:i,duration:o,timingFunction:u,onExit:c,onEntered:f,onEnter:d,onExited:p,enterDelay:m,exitDelay:h});return 0===g?l?(0,n.jsx)(n.Fragment,{children:s({})}):t?s({display:"none"}):null:"exited"===y?t?s({display:"none"}):null:(0,n.jsx)(n.Fragment,{children:s(function(e){let{transition:t,state:r,duration:n,timingFunction:o}=e,a={transitionDuration:"".concat(n,"ms"),transitionTimingFunction:o};return"string"==typeof t?t in _?{transitionProperty:_[t].transitionProperty,...a,..._[t].common,..._[t][P[r]]}:{}:{transitionProperty:t.transitionProperty,...a,...t.common,...t[P[r]]}}({transition:r,duration:g,state:y,timingFunction:b}))})}S.displayName="@mantine/core/Transition";var E={root:"m_87cf2631"};let N={__staticSelector:"UnstyledButton"},M=(0,f.b)((e,t)=>{let r=(0,s.w)("UnstyledButton",N,e),{className:o,component:a="button",__staticSelector:i,unstyled:l,classNames:f,styles:d,style:p,...m}=r,h=(0,u.y)({name:i,props:r,classes:E,className:o,style:p,classNames:f,styles:d,unstyled:l});return(0,n.jsx)(c.x,{...h("root",{focusable:!0}),component:a,ref:t,type:"button"===a?"button":void 0,...m})});M.classes=E,M.displayName="@mantine/core/UnstyledButton";var k={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844"};let L={orientation:"horizontal"},T=(0,l.Z)((e,t)=>{let{borderWidth:r}=t;return{group:{"--button-border-width":(0,o.h)(r)}}}),A=(0,p.d5)((e,t)=>{let r=(0,s.w)("ButtonGroup",L,e),{className:o,style:a,classNames:i,styles:l,unstyled:f,orientation:d,vars:p,borderWidth:m,variant:h,mod:g,...y}=(0,s.w)("ButtonGroup",L,e),b=(0,u.y)({name:"ButtonGroup",props:r,classes:k,className:o,style:a,classNames:i,styles:l,unstyled:f,vars:p,varsResolver:T,rootSelector:"group"});return(0,n.jsx)(c.x,{...b("group"),ref:t,variant:h,mod:[{"data-orientation":d},g],role:"group",...y})});A.classes=k,A.displayName="@mantine/core/ButtonGroup";let I={in:{opacity:1,transform:"translate(-50%, calc(-50% + ".concat((0,o.h)(1),"))")},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},U={},W=(0,l.Z)((e,t)=>{let{radius:r,color:n,gradient:o,variant:a,size:l,justify:s,autoContrast:u}=t,c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:a||"filled",autoContrast:u});return{root:{"--button-justify":s,"--button-height":(0,i.ap)(l,"button-height"),"--button-padding-x":(0,i.ap)(l,"button-padding-x"),"--button-fz":(null==l?void 0:l.includes("compact"))?(0,i.yv)(l.replace("compact-","")):(0,i.yv)(l),"--button-radius":void 0===r?void 0:(0,i.H5)(r),"--button-bg":n||a?c.background:void 0,"--button-hover":n||a?c.hover:void 0,"--button-color":c.color,"--button-bd":n||a?c.border:void 0,"--button-hover-color":n||a?c.hoverColor:void 0}}}),Y=(0,f.b)((e,t)=>{let r=(0,s.w)("Button",U,e),{style:o,vars:a,className:i,color:l,disabled:f,children:d,leftSection:p,rightSection:m,fullWidth:h,variant:g,radius:y,loading:b,loaderProps:v,gradient:x,classNames:j,styles:_,unstyled:P,"data-disabled":R,autoContrast:O,mod:C,...E}=r,N=(0,u.y)({name:"Button",props:r,classes:k,className:i,style:o,classNames:j,styles:_,unstyled:P,vars:a,varsResolver:W}),L=!!p,T=!!m;return(0,n.jsxs)(M,{ref:t,...N("root",{active:!f&&!b&&!R}),unstyled:P,variant:g,disabled:f||b,mod:[{disabled:f||R,loading:b,block:h,"with-left-section":L,"with-right-section":T},C],...E,children:[(0,n.jsx)(S,{mounted:!!b,transition:I,duration:150,children:e=>(0,n.jsx)(c.x,{component:"span",...N("loader",{style:e}),"aria-hidden":!0,children:(0,n.jsx)(w,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...v})})}),(0,n.jsxs)("span",{...N("inner"),children:[p&&(0,n.jsx)(c.x,{component:"span",...N("section"),mod:{position:"left"},children:p}),(0,n.jsx)(c.x,{component:"span",mod:{loading:b},...N("label"),children:d}),m&&(0,n.jsx)(c.x,{component:"span",...N("section"),mod:{position:"right"},children:m})]})]})});Y.classes=k,Y.displayName="@mantine/core/Button",Y.Group=A},9231:function(e,t,r){r.d(t,{Group:function(){return m}});var n=r(9533),o=r(1229),a=r(5638),i=r(3811),l=r(1206),s=r(4252),u=r(730),c=r(9815),f={root:"m_4081bf90"};let d={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},p=(0,i.Z)((e,t,r)=>{let{grow:n,preventGrowOverflow:o,gap:i,align:l,justify:s,wrap:u}=t,{childWidth:c}=r;return{root:{"--group-child-width":n&&o?c:void 0,"--group-gap":(0,a.bG)(i),"--group-align":l,"--group-justify":s,"--group-wrap":u}}}),m=(0,c.d5)((e,t)=>{let r=(0,l.w)("Group",d,e),{classNames:i,className:c,style:m,styles:h,unstyled:g,children:y,gap:b,align:v,justify:x,wrap:w,grow:j,preventGrowOverflow:_,vars:P,variant:R,__size:O,mod:C,...S}=r,E=o.Children.toArray(y).filter(Boolean),N=E.length,M=(0,a.bG)(null!=b?b:"md"),k="calc(".concat(100/N,"% - (").concat(M," - ").concat(M," / ").concat(N,"))"),L=(0,s.y)({name:"Group",props:r,stylesCtx:{childWidth:k},className:c,style:m,classes:f,classNames:i,styles:h,unstyled:g,vars:P,varsResolver:p});return(0,n.jsx)(u.x,{...L("root"),ref:t,variant:R,mod:[{grow:j},C],size:O,...S,children:E})});m.classes=f,m.displayName="@mantine/core/Group"},5287:function(e,t,r){r.r(t),r.d(t,{Stack:function(){return p}});var n=r(9533);r(1229);var o=r(5638),a=r(3811),i=r(1206),l=r(4252),s=r(730),u=r(9815),c={root:"m_6d731127"};let f={gap:"md",align:"stretch",justify:"flex-start"},d=(0,a.Z)((e,t)=>{let{gap:r,align:n,justify:a}=t;return{root:{"--stack-gap":(0,o.bG)(r),"--stack-align":n,"--stack-justify":a}}}),p=(0,u.d5)((e,t)=>{let r=(0,i.w)("Stack",f,e),{classNames:o,className:a,style:u,styles:p,unstyled:m,vars:h,align:g,justify:y,gap:b,variant:v,...x}=r,w=(0,l.y)({name:"Stack",props:r,classes:c,className:a,style:u,classNames:o,styles:p,unstyled:m,vars:h,varsResolver:d});return(0,n.jsx)(s.x,{ref:t,...w("root"),variant:v,...x})});p.classes=c,p.displayName="@mantine/core/Stack"},7792:function(e,t,r){r.r(t),r.d(t,{Title:function(){return m}});var n=r(9533);r(1229);var o=r(3811),a=r(1206),i=r(4252),l=r(730),s=r(9815),u=r(1917);let c=["h1","h2","h3","h4","h5","h6"];var f={root:"m_8a5d1357"};let d={order:1},p=(0,o.Z)((e,t)=>{let{order:r,size:n,lineClamp:o,textWrap:a}=t,i=function(e,t){let r=void 0!==t?t:"h".concat(e);return c.includes(r)?{fontSize:"var(--mantine-".concat(r,"-font-size)"),fontWeight:"var(--mantine-".concat(r,"-font-weight)"),lineHeight:"var(--mantine-".concat(r,"-line-height)")}:{fontSize:(0,u.h)(r),fontWeight:"var(--mantine-h".concat(e,"-font-weight)"),lineHeight:"var(--mantine-h".concat(e,"-line-height)")}}(r,n);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":"number"==typeof o?o.toString():void 0,"--title-text-wrap":a}}}),m=(0,s.d5)((e,t)=>{let r=(0,a.w)("Title",d,e),{classNames:o,className:s,style:u,styles:c,unstyled:m,order:h,vars:g,size:y,variant:b,lineClamp:v,textWrap:x,mod:w,...j}=r,_=(0,i.y)({name:"Title",props:r,classes:f,className:s,style:u,classNames:o,styles:c,unstyled:m,vars:g,varsResolver:p});return[1,2,3,4,5,6].includes(h)?(0,n.jsx)(l.x,{..._("root"),component:"h".concat(h),variant:b,ref:t,mod:[{order:h,"data-line-clamp":"number"==typeof v},w],size:y,...j}):null});m.classes=f,m.displayName="@mantine/core/Title"},2743:function(e,t,r){r.d(t,{a:function(){return o}});var n=r(1229);function o(e,t){let{getInitialValueInEffect:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{getInitialValueInEffect:!0},[o,a]=(0,n.useState)(r?t:!!("undefined"!=typeof window&&"matchMedia"in window)&&window.matchMedia(e).matches),i=(0,n.useRef)();return(0,n.useEffect)(()=>{if("matchMedia"in window)return i.current=window.matchMedia(e),a(i.current.matches),function(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch(r){return e.addListener(t),()=>e.removeListener(t)}}(i.current,e=>a(e.matches))},[e]),o}}}]);