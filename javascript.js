const grid = document.querySelector('.grid');
console.log(grid.clientWidth);

let numberGrid = 4;
for (let i = 0; i < numberGrid; i++) {
    const squares = document.createElement('div');
    squares.classList.add('squares');
    //squares.style.border = 'solid';
    squares.style.width = `${grid.clientWidth/Math.sqrt(numberGrid)}px`;
    grid.appendChild(squares);
};