function Student(fm) {
    // fm.preventDefault();
    this.name = document.querySelector('#name');
    this.email = document.querySelector('#email');
    this.age = Number(document.querySelector('#age'));
    this.class = document.querySelector('#class');
    this.organization = document.querySelector('#organization');
    // this.gender = document.querySelector('#email');
}

// this.parentalSignature = function(e) {
//     e.preventDefault();
//     if (this.age < 13) {
//         return "you must be 13 to create an account";
//     } else if (this.age < 18 ) {
//         return "you need parent permission to create pink count";
//     } else {
//         return "your account has been created";
//     }
// }

function process_form() {
    console.log(fm);

}