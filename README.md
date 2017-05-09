# People Factory

## Day 1 Topics
* Anatomy of an HTML element (tags, attributes, contents)
* Basic CSS selector syntax
  * Element name (`div`, `h1`, `p`, etc.)
  * Element ID (`#theID`, `div#theID`, etc.)
  * Class name (`.theClass`, `p.theClass`, etc.)
* Basic DOM manipulation
  * `document.querySelector`/`document.querySelectorAll`
  * `.textContent`/`.innerText`/`.innerHTML`
* Developer console
  * `console.log`
  * `console.group`/`.groupEnd`/`.groupCollapsed`
* Basic event handling
  * `onsubmit`
  * Anonymous functions
  * `.preventDefault`
  * Accessing input values
* Template literals
  * String interpolation, _e.g._ <code>`Hi, ${name}!`</code>
  * Multi-line strings

## Day 2 Topics

### Functions
* Function expressions
  * Hoisting
* Functions as variables
* Functions as object properties (_methods_)
* Variable scope
  * `var` vs. `let` and `const`
  * IIFEs: Immediately Invoked Function Expressions
  * ES6+ block scope
* Function invocation and the value of `this`
  * As functions, _e.g._ `someFunction()`: `this === window` (_i.e._ the global object)
    * **Warning**: This includes functions defined within other functions.
  * As methods, _e.g._ `someObject.someMethod()`: `this === someObject` (_i.e._ the object on which the method was called)
  * As event handlers, _e.g._ `someForm.onsubmit = someFunction`: `this === someForm` (_i.e._ the object that fired the event)
  * Arrow functions, _e.g._ `() => {}`
  * Setting the value of `this` with `bind()`

### Objects
* Object literals
* Property naming
* Retrieving property values
* Setting property values

### DOM
* Creating elements (`document.createElement('li')`)
* Setting style properties on elements (`someElement.style.backgroundColor = 'CadetBlue'`)
* Appending child elements (`someList.appendChild(someItem)`)

### Selectors
* Descendent (`ul li`) and child (`ul > li`)

### CSS Properties
* `background-color`
* `border`
* `height`
* `list-style`
* `width`

### Organizing Code
* `.js` files (`<script src="app.js"></script>`)
* Wrapping in an IIFE (`(function() {})();`)
* Wrapping in a block (`{}`)

## Goal: Grab values from form fields and add them to a list.

You'll need to employ these concepts that we used in class:
* Target elements with `document.querySelector`
* Handle events
* Prevent default event behavior from executing
* Alter an element's contents via `innerHTML`

### Baseline goal:
* Display values as plain text.

### Bonus Credit:
* Display values in separate paragraphs.

### Mega Bonus Credit:
* Display values in an unordered list.

### Super Mega Bonus Credit:
* Display values in a _definition list_ (`<dl>`).

Output something like this:

```html
<dl>
  <li>
    <dt>First Name</dt>
    <dd>Davey</dd>
  </li>

  <li>
    <dt>Hair color</dt>
    <dd>#000000</dd>
  </li>

  <!-- etc. -->
</dl>
```

### Super Mega Bonus Credit Hyper Fighting

Display the color value _in the specified color_.
