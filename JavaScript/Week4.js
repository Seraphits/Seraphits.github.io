function playButton() {
//    Declaration local varables
    var anwser, myElement;
    // Asked the user a question
    anwser = prompt('What animal says "meow"?').toLowerCase();
    // element from HTML
    myElement = document.getElementById("diamond");

    if (anwser === "cat") {
        // when they get the Qu right
        document.body.style.background = "green";
        myElement.style.display = "flex";
    } else {
        // when they get Qu wrong
        document.body.style.background = "red";
        myElement.style.display = "none";
    }
}