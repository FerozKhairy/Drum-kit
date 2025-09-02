
var respondToClick = document.querySelectorAll(".drum");
// button click that makes sound
for (let i = 0; i < respondToClick.length; i++) {
    respondToClick[i].addEventListener("click", click);
}
function click() {
    var buttonInnerhtmk = this.innerHTML;
    playSound(buttonInnerhtmk);
    buttonAnimation(buttonInnerhtmk);

}

/// key press that makes sound
document.addEventListener("keypress", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

// function that takes a paramter and plays sound according to the input
function playSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var kick = new Audio("./sounds/Kick-bass.mp3");
            kick.play();
            break;
        case 'k':
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case 'l':
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        default:
            break;
    }
}


// button Animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}