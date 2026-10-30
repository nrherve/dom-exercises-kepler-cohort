//select all the elements that we are going to use.
//adding event listener to the button
//Remove list logic

let myList = document.getElementById("myList");
//let items = document.querySelectorAll("li");
const button = document.querySelector('.btn')

button.addEventListener('click', ()=>{
    myList.lastElementChild.remove()
})
