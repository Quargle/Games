


function createGrid(size){
    const container = document.querySelector('.grid-container')
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //remove existing squares before adding new ones
    while (container.firstChild){
        container.firstChild.remove();
    }

    //  create squares
    for (i=1; i<=size*size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');   
        container.appendChild(square);
    }
    // add event listeners for squares
    createSquareListeners();
}

function changeColor(e){
    e.target.style.backgroundColor = 'black';
}

function resetSquares(){
    console.log('resetting...');
    var squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';    
    }
}

function changeGridSize(){
    window.size = prompt('Choose a new size (1-100):', window.size);
    while (window.size > 100){
        window.size = prompt('Please enter a value below 100:', window.size);
    }
    createGrid(window.size);
}


function createSquareListeners(){
    // create event listeners on squares to change color on mouseover
    var squares = document.getElementsByClassName('square');
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', changeColor);    
    }
}

function createButtonListeners(){
    // create event listener on click for reset button
    reset = document.getElementById('reset');
    reset.addEventListener('click', resetSquares);

    //create event listener on click for size change button
    changeSize = document.getElementById('changeSize');
    changeSize.addEventListener('click', changeGridSize);
}

window.size = 50;
createGrid(window.size);
createButtonListeners();


