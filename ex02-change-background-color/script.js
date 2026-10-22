let redButton = document.querySelector('.red');
let greenButton = document.querySelector('.green');
let blueButton = document.querySelector('.blue');

redButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});

greenButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
});

blueButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
});

// function changeColor(color) { 
//     document.body.style.backgroundColor = color;
// }

// blueButton.addEventListener("click", changeColor("blue"));
// redButton.addEventListener("click", changeColor("red"));
// greenButton.addEventListener("click", changeColor("green"));

