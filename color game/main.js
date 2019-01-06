// creating a list of random colors
const colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)',
];

const squaresList = document.querySelectorAll('.square');
let pickedColor = colors[3];
const colorDisplay = document.getElementById('color-display');
const messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

for (let [index, square] of squaresList.entries()) {
    // add initial color to squares
    square.style.backgroundColor = colors[index];

    // add click listenets to squares
    square.addEventListener('click', function() {
        // grab color of clicked square
        const clickedColor = this.style.backgroundColor;

        // compare color with picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!'
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try again!';
        }

    });
};

