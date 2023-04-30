var list = ["images/dice6.png", "images/dice5.png", "images/dice4.png", "images/dice3.png", "images/dice2.png", "images/dice1.png"];
var random1 = Math.floor(Math.random() * list.length);
var random2 = Math.floor(Math.random() * list.length);
var image = document.querySelector(".diceImg");
var image2 = document.querySelector(".diceImgg");
var dice = image.src = list[random1];
var dice2 = image2.src = list[random2];

if (random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 win";
}
else if (random1 < random2) {
    document.querySelector("h1").innerHTML = "Player 2 win🚩";
}
else {
    document.querySelector("h1").innerHTML = "🥱Draw🥱";
} 