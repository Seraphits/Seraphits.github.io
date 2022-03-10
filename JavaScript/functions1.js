//  pulling values from HTML
const player1plus1 = document.querySelector('#player1plus1');
const player2plus1 = document.querySelector('#player2plus1');
const resetButton = document.querySelector('#reset');
const player1Display = document.querySelector('#player1Display');
const player2Display = document.querySelector('#player2Display');
const winningScoreSelect = document.querySelector('#playto');

// Setting initial variables
let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let isGameOver = false;

// Adding one every time the player one button is pressed checking winner
player1plus1.addEventListener('click', function() {
    if (!isGameOver) {
        player1Score += 1;
        player1Display.textContent = player1Score;
        if (player1Score === winningScore) {
            isGameOver = true;
            player1Display.classList.add('winner');
            player2Display.classList.add('loser');
        }
        player1Display.textContent = player1Score;
    } 
}) ;
// Adding one every time the player one button is pressed checking winner
player2plus1.addEventListener('click', function() {
    if (!isGameOver) {
        player2Score += 1;
        player2Display.textContent = player2Score;
        if (player2Score === winningScore) {
            isGameOver = true;
            player2Display.classList.add('winner');
            player1Display.classList.add('loser');
        }
        player2Display.textContent = player2Score;
    } 
}) ;
//  selecting the score for the winner
winningScoreSelect.addEventListener('change', function() {
    // alert("change")
    winningScore =parseInt(this.value); 
    console.log(winningScore);
    resetScore();
})
//  button for resetting score
resetButton.addEventListener('click', resetScore)
// Create function that reset score
function resetScore() {
    isGameOver = false;
    player1Score = 0;
    player2Score = 0;
    player1Display.textContent = player1Score;
    player2Display.textContent = player2Score;
    player2Display.classList.remove('winner', 'loser');
    player1Display.classList.remove('winner', 'loser');
}