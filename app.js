const colors = ["green", "red", "yellow", "blue", "green", "red", "yellow", "blue", "green", "red", "yellow", "blue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //get random number between 0-3 colors
    const randomNumber = getRandomNumber();
    // const randomNumber = 2;

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

