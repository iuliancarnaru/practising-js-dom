// creating a list of random colors
let colors = generateRandomColors(6);

function generateRandomColors(num) {
    // make an array
    let arr = [];

    // add num random colors in the array
    for (let i=0; i < num; i++) {
        arr.push(randomColor());
    }

    // return arr
    return arr;
}

function randomColor() {
    // pick 'red' from 0 to 255
    const R = ~~(Math.random() * 256);

    // pick 'green' from 0 to 255
    const G = ~~(Math.random() * 256);

    // pick 'blue' from 0 to 255
    const B = ~~(Math.random() * 256);

    return `rgb(${R}, ${G}, ${B})`;
}

const squaresList = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.getElementById('color-display');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');

colorDisplay.textContent = pickedColor;

resetButton.addEventListener('click', function() {
    // generate all new colors
    colors = generateRandomColors(6);

    // pick a new random color form array
    pickedColor = pickColor();

    // change color display to match picked color
    colorDisplay.textContent = pickedColor;

    // change colors of squares
    for (let [index, square] of squaresList.entries()) {
        // add initial color to squares
        square.style.backgroundColor = colors[index];
    };
    
    h1.style.backgroundColor = '#232323';
    resetButton.textContent = 'New Colors';
});

for (let [index, square] of squaresList.entries()) {
    // add initial color to squares
    square.style.backgroundColor = colors[index];

    // add click listenets to squares
    square.addEventListener('click', function() {
        // grab color of clicked square
        const clickedColor = this.style.backgroundColor;

        // compare color with picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = 'Play again?';
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try again!';
        }

    });
};

const changeColors = (color) => {
    // loop through all squares
    for (let [index, square] of squaresList.entries()) {
        // change each color to match given color
        square.style.backgroundColor = color;
    }
    
};

function pickColor() {
    const random = ~~(Math.random() * colors.length);
    return colors[random];
}
