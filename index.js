alert("You need to reload the page to roll the dice !");

var randomNumber1= Math.floor(Math.random()*6)+1;

var randomImageSource= "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" ⛳ Player 1 wins";
    document.querySelector("h3").innerHTML="Congrats Player 1 !";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins ⛳";
    document.querySelector("h3").innerHTML="Congrats Player 2 !";
}
else{
    document.querySelector("h1").innerHTML="! DRAW !";
    document.querySelector("h3").innerHTML="Oops...";
}