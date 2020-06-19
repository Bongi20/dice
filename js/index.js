//first dice on the left
// 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// dice1png - dice6png
var randomDiceChange = "dice" + randomNumber1 + ".png";

// images/dice1png - images/dice6png
var randomImageSource = "images/" + randomDiceChange;

//
var image1 = document.querySelectorAll("img")[0];

//
image1.setAttribute("src", randomImageSource)

//second dice on the right
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins
if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "Player 1 WINS😁!"
}

// if player 2 wins
else if (randomNumber2 > randomNumber1){
	document.querySelector("h1").innerHTML = "Player 2 WINS😁!"
}

// when they both draw
else{
	document.querySelector("h1").innerHTML = "Draw!!!"
}