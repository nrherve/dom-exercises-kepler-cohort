<<<<<<< HEAD
// Selecting all needed elements
// Create <li> element
// Create a functionality to our button
// Update list as a button is clicked


let list = document.getElementById("myList");
let addButton = document.querySelector(".btn");

let currentItem = 1;
addButton.addEventListener("click", ()=>{
    let newItem = document.createElement("li");
    newItem.textContent = `Item ${currentItem}`;
    currentItem++ ;
    list.appendChild(newItem);
})
=======
// Select the unordered list element by its ID
let myList = document.querySelector("#myList");

// Select the button element by its class
let btnAdd = document.querySelector(".add");

// Counter to keep track of item numbers
let numberItem = 1;

// Add a click event listener to the button
btnAdd.addEventListener("click", function () {
  // Create a new <li> element
  let li = document.createElement("li");

  // Create a text node with the current item number
  let liText = document.createTextNode(`Item ${numberItem}`);

  // Append the text to the <li> element
  li.appendChild(liText);

  // Append the <li> element to the list
  myList.appendChild(li);

  // Increment the item number for the next addition
  numberItem++;
});
>>>>>>> 66870370d9e2d43709ff34f101d71a1fc641d862
