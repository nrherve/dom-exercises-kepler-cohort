//access the elemets text and the buttom
//add the event listner on the button

let text = document.querySelector("#text");
let button = document.querySelector("#changeFontSize");

button.addEventListener("click",()=>{
    if(text.style.color === "red"){
        text.style = null;
    }else{
        text.style.color = "red";
        text.style.fontSize="30px";
    }

})