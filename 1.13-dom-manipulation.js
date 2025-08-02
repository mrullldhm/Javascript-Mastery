// DOM - Document Object Model
// DOM Manipulation - using JavaScript to change, add, remove or style element on the webpage dynamicallys


// 1. Selecting Elements
// | Method                                       | Description                                           |
// | -------------------------------------------- | ----------------------------------------------------- |
// | `document.getElementById(id)`                | Selects one element by ID                             |
// | `document.getElementsByClassName(className)` | Selects elements by class (HTMLCollection)            |
// | `document.getElementsByTagName(tag)`         | Selects elements by tag name                          |
// | `document.querySelector(selector)`           | Selects the **first** matching element (CSS selector) |
// | `document.querySelectorAll(selector)`        | Selects **all** matching elements (NodeList)          |

// 2. Reading/Changing Content
// | Property / Method     | Description                                   |
// | --------------------- | --------------------------------------------- |
// | `element.textContent` | Gets or sets **text** only                    |
// | `element.innerHTML`   | Gets or sets **HTML** content                 |
// | `element.innerText`   | Gets or sets text (affected by CSS)           |
// | `element.outerHTML`   | Gets or replaces the element including itself |
// | `element.value`       | Gets or sets value (for inputs)               |

// 3. Styling Elements
// | Method / Property              | Description                                            |
// | ------------------------------ | ------------------------------------------------------ |
// | `element.style.property`       | Set inline styles (e.g. `element.style.color = "red"`) |
// | `element.classList.add()`      | Add class                                              |
// | `element.classList.remove()`   | Remove class                                           |
// | `element.classList.toggle()`   | Toggle class                                           |
// | `element.classList.contains()` | Check if class exists                                  |
// | `getComputedStyle(element)`    | Get computed styles (read-only)                        |

// 4. Creating Elements
// | Method                                         | Description                                                                                         |
// | ---------------------------------------------- | --------------------------------------------------------------------------------------------------- |
// | `document.createElement(tag)`                  | Creates a new element                                                                               |
// | `document.createTextNode(text)`                | Creates a text node                                                                                 |
// | `element.appendChild(child)`                   | Appends child to parent                                                                             |
// | `element.append(...nodes)`                     | Appends multiple nodes or strings                                                                   |
// | `element.prepend(...nodes)`                    | Prepends to beginning                                                                               |
// | `element.insertBefore(newNode, referenceNode)` | Insert before a node                                                                                |
// | `element.insertAdjacentHTML(position, html)`   | Inserts HTML relative to the element (`'beforebegin'`, `'afterbegin'`, `'beforeend'`, `'afterend'`) |

// 5. Removing / Replacing Elements
// | Method                                    | Description                |
// | ----------------------------------------- | -------------------------- |
// | `element.remove()`                        | Removes the element itself |
// | `parent.removeChild(child)`               | Removes a specific child   |
// | `parent.replaceChild(newChild, oldChild)` | Replaces a child node      |

// 6. Traversing the DOM
// | Property                                             | Description        |
// | ---------------------------------------------------- | ------------------ |
// | `element.parentNode`                                 | Get parent node    |
// | `element.children`                                   | Get child elements |
// | `element.firstChild` / `firstElementChild`           | First child        |
// | `element.lastChild` / `lastElementChild`             | Last child         |
// | `element.nextSibling` / `nextElementSibling`         | Next sibling       |
// | `element.previousSibling` / `previousElementSibling` | Previous sibling   |

// 7. Event Handling
// | Method                                          | Description                                      |
// | ----------------------------------------------- | ------------------------------------------------ |
// | `element.addEventListener("event", handler)`    | Listen for events (e.g. `click`, `input`)        |
// | `element.removeEventListener("event", handler)` | Stop listening                                   |
// | `event.target`                                  | Access the element that triggered the event      |
// | `event.preventDefault()`                        | Prevent default behavior (e.g., form submission) |
// | `event.stopPropagation()`                       | Stop bubbling                                    |

// 8. Attributes
// | Method / Property                   | Description               |
// | ----------------------------------- | ------------------------- |
// | `element.getAttribute(name)`        | Get attribute value       |
// | `element.setAttribute(name, value)` | Set attribute             |
// | `element.removeAttribute(name)`     | Remove attribute          |
// | `element.hasAttribute(name)`        | Check if attribute exists |
// | `element.attributes`                | List all attributes       |

// 9. Others
// | Feature                          | Description                        |
// | -------------------------------- | ---------------------------------- |
// | `element.focus()` / `blur()`     | Focus/blur on input fields         |
// | `element.scrollIntoView()`       | Scroll element into view           |
// | `element.contentEditable = true` | Make element editable              |
// | `element.dataset`                | Access `data-*` attributes         |
// | `element.tagName`                | Get tag name                       |
// | `element.nodeType`               | Type of node (e.g., element, text) |

