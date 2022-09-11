var randomNumber1 =Math.floor(Math.random() *6) + 1;

var randomDiceImage = "dice" + randomNumber1 +".png";

var randomImageSource = "images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() *6 + 1);

randomDiceImage="dice" + randomNumber2 +".png";

randomImageSource = "images/"+ randomDiceImage;

document.querySelector(".img2").setAttribute("src",randomImageSource);

if(randomNumber1>randomNumber2){
  document.querySelector(".r").innerHTML="Player1 win";
}
else if(randomNumber2>randomNumber1){
  document.querySelector(".r").innerHTML="Player2 win";
}
else{
  document.querySelector(".r").innerHTML="draw";
}
