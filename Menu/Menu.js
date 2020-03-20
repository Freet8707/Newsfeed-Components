/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

class Menu {
  constructor(menuItems){
    this.menu = document.createElement("div")
    this.list = document.createElement("ul")
    this.menu.classList.add("menu")
    this.mainMenu = document.querySelector(".menu-button")
    this.header = document.querySelector(".header")
    this.header.appendChild(this.menu)

    for(let i = 0; i < menuItems.length; i++){
      let listItem = document.createElement("li")
      listItem.textContent = menuItems[i]
      this.list.appendChild(listItem)
    }
    this.mainMenu.addEventListener("click", (event) => {
      this.menu.classList.toggle("menu--open")
    })
    this.menu.appendChild(this.list)
  }
}

const menuConstruct = new Menu(menuItems)

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  class Menu {
    constructor(menuItems){
      this.menu = documnent.createElement("div")
      this.list = document.createElement("ul")
      this.menu.classList.add("menu")

      for(let i = 0, i < menuItems.length, i++){
        let listItem = document.createElement("li")
        listItem.textContent = menuItems[i]
        this.list.appendChild(listItem)
      }
      this.menu.appendChild(this.list)

      this.menuSelector = document.querySelector(".menu-button")
      this.menuSelector.addEventListener("click", (event) => {
        this.menu.classList.toggle("menu--open")
      })
      this.menuSelector.appendChild(this.menu)
    }
  }

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
