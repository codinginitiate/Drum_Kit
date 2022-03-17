// Numer of drums in our drum kit
var numOfDrums = document.querySelectorAll(".drum").length;
// Loop through all the drums(beginning number is zero)
for (i = 0; i < numOfDrums; i++) {
  // querySelectorAll makes an array of the drum kit
  // Higher order functions use other functions as input
  // addEventListener is a higher order function
  // Call back functions are functions that are used as input in other functions
  // the anonymous below is an call back function
  // clicking on button creates sound
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // buttonInnerHTML is a variable that represents the drum letters w,a,s,d,j,k,l
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
// pressing key creates sound
document.addEventListener('keydown', function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});
// determines which sound to use on button click or key press
function makesound(key) {
  //Use switch instead of if else statements
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
// any key pressed ,that does not make sounds, is logged
    default:
      console.log(event.key);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);


}
