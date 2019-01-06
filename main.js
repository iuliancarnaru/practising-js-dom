
let p1Score = 0;
let p2Score = 0;

const p1Button = document.querySelector('#p1');
const p2Button = document.getElementById('p2');

const p1Dispaly = document.querySelector('#p1-display');
const p2Dispaly = document.querySelector('#p2-display');

p1Button.addEventListener('click', () => {
    p1Score++;
    p1Dispaly.textContent = p1Score;
})

p2Button.addEventListener('click', () => {
    p2Score++;
    p2Dispaly.textContent = p2Score;
})
