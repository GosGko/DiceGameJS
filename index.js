var list = [images/dice6.png, images/dice5.png, images/dice4.png, images/dice3.png, images/dice2.png, images/dice1.png];
var random = Math.random();
random = (random * 6) + 1;
random = Math.floor(random) ;
var image = document.querySelector(".diceImg");
