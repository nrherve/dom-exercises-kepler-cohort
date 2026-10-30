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