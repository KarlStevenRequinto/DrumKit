numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);



}};

//function handleClick() {
//    var audio = new Audio("sounds/crash.mp3");
//    audio.play();/