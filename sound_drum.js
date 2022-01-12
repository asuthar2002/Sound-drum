
for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

    });

}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
});
function makeSound(key) {
    switch (key) {
        case 'w':
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case 'a':
            var crash2 = new Audio("sounds/kick-bass.mp3")
            crash2.play();
            break;
        case 's':
            var crash3 = new Audio("sounds/snare.mp3")
            crash3.play();
            break;
        case 'd':
            var crash4 = new Audio("sounds/tom-1.mp3")
            crash4.play();
            break;
        case 'j':
            var crash5 = new Audio("sounds/tom-2.mp3")
            crash5.play();
            break;
        case 'k':
            var crash6 = new Audio("sounds/tom-3.mp3")
            crash6.play();
            break;
        case 'l':
            var crash7 = new Audio("sounds/tom-4.mp3")
            crash7.play();
            break;
        default:
            var crash7 = new Audio("sounds/tom-4.mp3")
            crash7.play();
    }
}
