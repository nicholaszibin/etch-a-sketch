
const grid = document.querySelector('.grid');

let numberGrid = 4;
grid.addEventListener("load", updateTextInput(numberGrid));

//Use the slider to update the number of squares
function updateTextInput(val) {
    document.getElementById('textInput').value=val;
    let numberGrid = val;
    grid.innerHTML = '';
    
    //Update the grid
    for (let i = 0; i < Math.pow(numberGrid,2); i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        squares.style.width = `${grid.clientWidth/numberGrid}px`;
        grid.appendChild(squares);
    };

    //Color in the squares all black.
    let sq = document.querySelectorAll('.squares');
    sq.forEach(square => square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'
    }));

    //Resets all square to white
    const button = document.querySelector('button');
    button.addEventListener('click', (e) => {
        sq.forEach(square => square.style.backgroundColor = 'white')
            });
  };

