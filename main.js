
// initialize the variables that holds the score
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

// selectiong the buttons
const p1Button = document.querySelector('#p1');
const p2Button = document.getElementById('p2');
const resetButton = document.getElementById('reset');

// selecting the display spans
const p1Dispaly = document.querySelector('#p1-display');
const p2Dispaly = document.querySelector('#p2-display');

// adding event listener to p1Button
p1Button.addEventListener('click', () => {
    if (!gameOver) {
        p1Score++;

        if(p1Score === winningScore) {
            p1Dispaly.classList.add('winner');
            gameOver = true;
        }
        p1Dispaly.textContent = p1Score;
    }
});

// adding event listener to p2Button
p2Button.addEventListener('click', () => {
    if (!gameOver) {
        p2Score++;

        if(p2Score === winningScore) {
            p2Dispaly.classList.add('winner');
            gameOver = true;
        }
        p2Dispaly.textContent = p2Score;
    }
});

resetButton.addEventListener('click', () => {
    // reseting players score
    p1Score = 0;
    p2Score = 0;

    // reseting span display
    p1Dispaly.textContent = 0;
    p2Dispaly.textContent = 0;

    // removing winning class
    p1Dispaly.classList.remove('winner');
    p2Dispaly.classList.remove('winner');

    // setting back gameOver to false
    gameOver = false;
});

