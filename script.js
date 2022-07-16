//global variables
const mainDiv = document.querySelector('.grid');
let currentColor = 'black';
let gridSize = 16;



//function what creates the grid
function createGrid(size) {
    let cellSize = 770/size;
    let rowSize = size*cellSize;
    
    for (let i=0; i<size; i++){
        for (let j= 0;j<size; j++){
            let newDiv = document.createElement('div');
            newDiv.style.cssText = `height: ${cellSize}px; width: ${cellSize}px; background-color: white;`;
            mainDiv.appendChild(newDiv);
        };

    };
};
createGrid(gridSize);


//random color function
function randomColor(){
    return [Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)];
}



// function responsible for coloring the currently active div
function colorDiv(event){
    if(event.which == 1){
        event.preventDefault();
        
        if (currentColor !== 'random') {
            event.target.style.backgroundColor = currentColor;
        } else {
            currentColorRan = randomColor();
            event.target.style.backgroundColor = `rgb(${currentColorRan.join(", ")})`;
        };
    };
};
const div = document.querySelector('.grid');
div.addEventListener('mouseover', colorDiv);



//function for deleting the existing grid and drawing new one with new size
function drawNewGrid() {

    let newSize = parseInt(prompt("Enter new size: "), 10);
    while (isNaN(newSize) || newSize<0 || newSize>100||newSize==null||newSize==="") {
        newSize = prompt("Enter new size: "); 
    };

    let first = mainDiv.firstElementChild;
    while (first) {
        first.remove();
        first = mainDiv.firstElementChild;
    };
    createGrid(newSize);
};
const newGrid = document.querySelector('.change-grid');
newGrid.addEventListener('click', drawNewGrid)



// Remove all borders from the color palette
function removeBorder() {
    const children = colorSelector.childNodes;

    children.forEach(element=>{
        element.classList = 'color';
    })

};

// Reset the current grid
function resetGrid(){
    const children = mainDiv.childNodes;
    children.forEach(element=>{
        element.style.backgroundColor = "white";
    });
};
const reset = document.querySelector('.resetgrid');
reset.addEventListener('click', resetGrid);


//Choose color
const colorSelector = document.querySelector('.colors');
colorSelector.addEventListener('click', function(e){
    currentColor = e.target.id;

    if (e.target.classList.value !=='colors'){
        //we remove border from all of the divs
        removeBorder();
        
        //we add selected class to the selected div 
        e.target.classList.add('selected');
    };
});




