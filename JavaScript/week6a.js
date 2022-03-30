 // classSignUp Object definition
 function ClassSignUp(fm) {
    // constructor
    this.name = fm.name.value;
    this.email = fm.email.value;
    this.age = Number(fm.age.value);
    this.organization = fm.organization.value;
    this.color = fm.color.checked; // fever
    this.tranSpiral = fm.tranSpiral.checked; // cough
    this.generations = fm.generations.checked; // breath
    this.framework = fm.framework.checked; // travel
    this.glasses = fm.glasses.checked; // contact

    //  see if they can sign up
    this.parentalSignature = function () {
        // How to see if they can sign up
        if (this.age < 13) {
            return "you must be 13 to create an account";
        } else if (this.age < 18 ) {
            return "you need parent permission to create a count";
        } else {
            return "your account has been created";
        }
    }
    // change color if signed up
    this.severity = function () {
        // to young
        if (this.age < 13) {
            return "#e99883"; // high red
        //  parental consent
        } else if (this.age < 18 ) {
            return "#f1f0a3"; // medium yellow
        //  on waitlist
        } else  {
            return "#caeeca"; // low green
        }
    }

}

function process_form() {
    // get form object
    var fm = document.getElementById("my_form");
    console.log(fm);
    // get output object
    var out = document.getElementById("output");
    console.log(out);
    // instantiate classSignUp object
    var classSignUp = new ClassSignUp(fm);
    console.log(classSignUp);
    //console.log("Debug:" + JSON.stringify(classSignUp));

    // set background color using classSignUp object parentalSignature method
    out.style.background = classSignUp.severity();
    // display if on wait list
    out.innerHTML = classSignUp.parentalSignature();
   
}