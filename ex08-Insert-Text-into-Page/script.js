//Selecting all needed elements
//create a functionality button on adding elements
//Make sure the spaces are not being added.

let text = document.getElementById("inputText");
let addButton = document.getElementById("addText");
let list = document.getElementById("displayText");

addButton.addEventListener("click", () => {
    let newText = document.createElement('p');
    newText.innerText = text.value;
    list.appendChild(newText);
    text.value = "";
})