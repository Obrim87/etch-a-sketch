function resolution(input) { 
    for (i = 0; i < input; i++) {
        let div = document.createElement('div');
        div.classList.add('div');
        container.appendChild(div);
    }
}

let container = document.querySelector('.container');
let reset = document.querySelector('.resetBtn');

resolution(10000);

let div = document.querySelectorAll('.div');

div.forEach((block) => {
    block.addEventListener('mouseenter', () => block.style.background = 'white');
})

reset.addEventListener('click', () => {
    div.forEach(clearBlocks => clearBlocks.style.background = 'grey');
    let input = prompt('How many squares per side? (Max: 100)')
    resolution(input);
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${input}, 1fr)`;
})