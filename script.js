function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

function random_rgba() {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function gradualRgba(x) {
    x += 0.1;
    y = x;
    return x;
}

function resolution(input) { 
    for (i = 0; i < input; i++) {
        let div = document.createElement('div');
        div.classList.add('div');
        container.appendChild(div);
    }
}

let container = document.querySelector('.container');
let reset = document.querySelector('.resetBtn');
let y = 0;
let divOpacity = 0;

resolution(10000);

let div = document.querySelectorAll('.div');

for (let element of div) {
    element.addEventListener('mouseenter', () => {
        element.style.background = 'black';
        element.style.opacity = divOpacity;
        divOpacity += 0.1;
    });
    //element.style.background = 'rgba(0,0,0,' + gradualRgba(y) + ')');
}

reset.addEventListener('click', () => {
    divOpacity = 0;
    div.forEach(clearBlocks => clearBlocks.style.background = 'white');
    let input = prompt('How many squares per side? (Max: 100)')
    if (input > 100 || input < 1) {
        alert('Please enter a number from 1 to 100');
    } else {
        resolution(input);
        container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    }
})