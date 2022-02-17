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

function resolution(input) { 
    for (i = 0; i < input; i++) {
        let div = document.createElement('div');
        div.classList.add('div');
        container.appendChild(div);
    }
}

let container = document.querySelector('.container');
let clear = document.querySelector('.clearBtn');
let classic = document.querySelector('.classicBtn');
let random = document.querySelector('.randomBtn');
let sliderValue = document.querySelector('.sliderValue');
let slider = document.querySelector('.slider');

resolution(10000);

let div = document.querySelectorAll('.div');

for (let element of div) {
    element.addEventListener('mouseenter', () => element.style.background = 'black');
}

clear.addEventListener('click', () => {
    div.forEach(clearBlocks => clearBlocks.style.background = 'white');
})

random.addEventListener('click', () => {
    random.style.border = 'solid 3px white';
    classic.style.border = 'solid 1px white';
    for (let element of div) {
        element.addEventListener('mouseenter', () => element.style.background = getRandomRgb());
    }
})

random.addEventListener('mouseenter', () => random.style.background = getRandomRgb());

random.addEventListener('mouseleave', () => random.style.background = 'grey');

classic.addEventListener('click', () => {
    random.style.border = 'solid 1px white';
    classic.style.border = 'solid 3px white';
    for (let element of div) {
        element.addEventListener('mouseenter', () => element.style.background = 'black');
    }
})

sliderValue.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    sliderValue.textContent = `${this.value} x ${this.value}`;
    let input = this.value
    resolution(input);
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    }