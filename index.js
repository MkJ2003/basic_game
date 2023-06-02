var randomNumber1 = Math.random();

var value1 = Math.floor(randomNumber1 * 6) + 1;

if (value1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
else if (value1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
else if (value1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
else if (value1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
else if (value1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
else if (value1 === 6) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

var randomNumber2 = Math.random();

var value2 = Math.floor(randomNumber2 * 6) + 1;

if (value2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
else if (value2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
else if (value2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
else if (value2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
else if (value2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
else if (value2 === 6) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}



if (value1 > value2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (value2 > value1) {


    document.querySelector("h1").innerHTML = "Player 2 wins!";

}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}
