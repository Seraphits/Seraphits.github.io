function classSignUp(fm) {
    this.name = fm.name.value;
    this.email = fm.email.value;
    this.age = Number(fm.age.value);
    this.class = fm.class.value;
    this.organization = fm.organization.value;
    this.gender = fm.gender.value;
}

this.parentalSignature = function() {
    if (this.age < 13) {
        return "you must be 13 to create an account";
    } else if (this.age < 18 ) {
        return "you need parent permission to create pink count";
    } else {
        return "your account has been created";
    }
}

function process_form(e) {
    e.preventDefault();
    console.log("I ran");
    //  get form object
     var fm = document.getElementById("my_form");
     // get output object
     var out = document.getElementById("output");
     // instantiate patient object
     var classSignUp = new classSignUp(fm);
     //console.log("Debug:" + JSON.stringify(patient));

     out.innerHTML = classSignUp.parentalSignature();
}
