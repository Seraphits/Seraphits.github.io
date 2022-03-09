// LOGS message when clicked
const btn = document.querySelector('#v2');
btn.onclick = function() {
    console.log("WHY DID YOU CLICKED ME. I DO NOT LIKE BEING CLICKED");
}
// sends alert when clicked
const btn3 = document.querySelector('#v3');
    btn3.addEventListener('click', function() {
        alert("CLICKED")
    } )
// changes backround color to the random color made with makerandomColor function
const buttonv1 = document.querySelector('#v1');
const colorName = document.querySelector('#colorheader');
buttonv1.addEventListener('click', function() {
    console.log("clicked v1");
    const newColor =makerandomColor() ;
    document.body.style.backgroundColor = newColor ;
    colorName.innerText = newColor;
})
// makes a random color
const makerandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})` ;
}
// changes button to random color 
const colorButtons =document.querySelectorAll('.colorbox');
    for(let colorButton of colorButtons ){
        colorButton.addEventListener('click', colorize)
    }
    const h2s =document.querySelectorAll('.colorChange');
    for(let h2 of h2s ){
        h2.addEventListener('click', colorize)
    }
    function colorize() {
        console.log(this);
        this.style.backgroundColor = makerandomColor();
        this.style.color = makerandomColor();
    }
// logs event on key press
document.querySelector('#v4').addEventListener('click', function(evt) {
    console.log(evt);
})
// logs pressing of keys 
    const input = document.querySelector('input');
    // input.addEventListener('keydown', function(){
    //     console.log("KEYDOWN");
    // })
    // input.addEventListener('keyup', function(){
    //     console.log("KEYUP");
    // })
 // log key that is pressed key logs the key ans code logs the key loction 
    input.addEventListener('keydown', function(e){
        console.log(e.key);
        console.log(e.code);
    })
// logs keys for moving
    window.addEventListener('keydown', function(e) {
        switch(e.code) {
            case 'ArrowUp':
                console.log("UP");
                break;
            case 'ArrowDown':
                console.log("DOWN");
                break;
            case 'ArrowLeft':
                console.log("LEFT");
                break;
            case 'ArrowRight':
                console.log("RIGHT");
                break;
            default:
                console.log("IGNORED");
        }
    })

const formMessage = document.querySelector('#formMeeage')
const containerMessage = document.querySelector('#messages')
formMessage.addEventListener('submit', function(e) {
    //    Prevents default actions taken to redirect page
   e.preventDefault();

    const nameInput = this.elements.name;
    const messageInput = this.elements.message;
    addMessage (nameInput.value, messageInput.value)
    // resets form
    nameInput.value = '';
    messageInput.value = '';

});
// add new message
const addMessage = (name, message) => {
    const newMessage = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(name)
    newMessage.append(bTag);
    newMessage.append(` - ${message}`);
    console.log(newMessage);
    containerMessage.append(newMessage);
}