
const grid = document.querySelector('.grid');

let numberGrid = 4;

function updateTextInput(val) {
    document.getElementById('textInput').value=val;
    let numberGrid = val;
    
    for (let i = 0; i < Math.pow(numberGrid,2); i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        //squares.style.border = 'solid';
        squares.style.width = `${grid.clientWidth/numberGrid}px`;
        grid.appendChild(squares);
    };

  }