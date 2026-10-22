/* 
1. We getting the elements which is button and text
2. We create array to hold text we want to change to
3. Function creation for text change whereby, we will use innerHTML() to change the text we currently have.*/


let text = document.getElementById("text");
let button = document.getElementById("changeBtn");

let array = ["Dynamic text", "Hello you", "What are you doing", "See you next time"];
button.addEventListener("click", function(){
    let currentIndex = array.indexOf(text.innerHTML);
    let nextIndex = currentIndex + 1;
    text.innerHTML = array[nextIndex];
    if(nextIndex >= array.length){
        text.innerHTML = array[0];
    }
})