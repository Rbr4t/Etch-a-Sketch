const mainDiv = document.querySelector('.grid');
//function what creates the grid
function createGrid(size) {
    
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
let gridSize = 16;
createGrid(gridSize);



// function responsible for coloring the currently active div
function colorDiv(event){
    //console.log(event.which)
    if(event.which == 1){
        event.preventDefault()
        event.target.classList.add('colored');
    };
};

const div = document.querySelector('.grid');
div.addEventListener('mouseover', colorDiv, true)



//function for deleting the existing grid and drawing new one with new size
function drawNewGrid() {
    let newSize = parseInt(prompt("Enter new size: "), 10);
    
    while (isNaN(newSize) || newSize<0 || newSize>100) {
        newSize = prompt("Enter new size: "); 
    };

    let first = mainDiv.firstElementChild;
    while (first) {
        first.remove();
        first = mainDiv.firstElementChild;
    };
    createGrid(newSize);

}

//New grid
const newGrid = document.querySelector('.change-grid');
newGrid.addEventListener('click', drawNewGrid)