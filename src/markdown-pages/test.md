---
path: ""
---

<!-- ```js
function test() {
  // highlight-start
  return "this is a test"
  // highlight-end
}
``` -->

<!-- ```js
function test2() {
  // hide-start
  return "this is also a test"
  // hide-end
}
``` -->

```js
function test2() {
  //hide-range{3-5, 1}

  let a = 2

  a += 52

  let b = 6
  let a = 2
  a += 52
  let b = 6
  // highlight-start
  let a = 2
  // highlight-end
  a += 52
  // highlight-start
  let b = 6
  // highlight-end
  // highlight-start
  return "this is also a test"
  // highlight-end
}
```
