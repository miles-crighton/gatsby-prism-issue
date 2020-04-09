---
path: ""
---

**Input (directives capitalised):**

```js
function highlightTest() {
  // Highlight-start
  return "this is a highlight test"
  // Highlight-end
}
```

**Output:**

```js
function highlightTest() {
  // highlight-start
  return "this is a highlight test"
  // highlight-end
}
```

**Input (directives capitalised):**

```js
function hideTest() {
  // Hide-start
  return "this is also a test"
  // Hide-end
}
```

```js
function hideTest() {
  // hide-start
  return "this is also a test"
  // hide-end
}
```

**Input (directives capitalised):**

```js
function fullTest() {
  //Hide-range{2-3}
  if (directiveRange) {
    const strippedDirectiveRange = directiveRange.slice(1, -1)
    const range = rangeParser.parse(strippedDirectiveRange)
    if (range.length > 0) {
      range.forEach(relativeIndex => {
        //Highlight-start
        if (feature === `hide`) {
          actions.removeLines(1)
        }
        //Highlight-end
        actions.flag(feature, index + relativeIndex, flagSource)
      })
      //Hide-next-line
      break
    }
  }
}
```

**Output:**

```js
function fullTest() {
  //hide-range{2-3}
  if (directiveRange) {
    const strippedDirectiveRange = directiveRange.slice(1, -1)
    const range = rangeParser.parse(strippedDirectiveRange)
    if (range.length > 0) {
      range.forEach(relativeIndex => {
        //highlight-start
        if (feature === `hide`) {
          actions.removeLines(1)
        }
        //highlight-end
        actions.flag(feature, index + relativeIndex, flagSource)
      })
      //hide-next-line
      break
    }
  }
}
```
