
//function what creates the grid
function createGrid(size) {
    const mainDiv = document.querySelector('.grid');
    let cellSize = 940/size;
    let rowSize = size*cellSize;
    
    for (let i=0; i<size; i++){
        for (let j= 0;j<size; j++){
            let newDiv = document.createElement('div');
            newDiv.style.cssText = `height: ${cellSize}px; width: ${cellSize}px;`;
            mainDiv.appendChild(newDiv);
        };

    };
};
let gridSize = 32;
createGrid(gridSize);



// function responsible for coloring the currently active div
function colorDiv(event){
    if(event.which == 1)
        event.target.classList.add('colored');
};

const div = document.querySelector('.grid');
div.addEventListener('mouseover', colorDiv, false)
