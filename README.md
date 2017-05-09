# People Factory

## Topics
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
