// var fname = "Jack";
// var age = 23;
// var message = "Hi, my name is " + fname + " and I am " + age + " year old";
// alert(message);

function playButton() {
//    Declaration local varables
    var anwser, myElement;

    anwser = prompt('What animal says "meow"?').toLowerCase();

    myElement = document.getElementById("colorBox");

    if (anwser === "cat") {
        document.body.style.background = "green";
    } else {
        document.body.style.background = "red";
    }
}