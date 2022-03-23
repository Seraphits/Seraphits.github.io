//  pulling values from HTML
const player1 = {
    score: 0,
    button:document.querySelector('#player1plus1'),
    dispay: document.querySelector('#player1Display')
}
const player2 = {
    score: 0,
    button:document.querySelector('#player2plus1'),
    dispay: document.querySelector('#player2Display')
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

// Setting initial variables

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent){
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
        }
        player.display.textContent = player.score;
    } 
}

// Adding one every time the player one button is pressed checking winner
player1plus1.addEventListener('click', function() {
    if (!isGameOver) {
        player1Score += 1;
        player1Display.textContent = player1Score;
        if (player1Score === winningScore) {
            isGameOver = true;
            player1Display.classList.add('winner');
            player2Display.classList.add('loser');
            player.button.disbled = true
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