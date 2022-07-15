
//function what creates the grid
function createGrid(size) {
    const mainDiv = document.querySelector('.grid');
    let cellSize = 500/size;
    let rowSize = size*cellSize;
    
    for (let i=0; i<size; i++){
        for (let j= 0;j<size; j++){
            let newDiv = document.createElement('div');
            newDiv.style.cssText = `height: ${cellSize}px; width: ${cellSize}px;`;
            mainDiv.appendChild(newDiv);
        };

    };
};

createGrid(9);


// function responsible for coloring the currently active div
function colorDiv(event){
    event.target.classList.add('colored');
};

let div = document.querySelector('.grid');

//this should be multiple event listener, but it seems to be rather MOUSEDOWN || MOUSEOVER 
// not MOUSEDOWN && MOUSEOVER
['mousedown', 'mouseover'].forEach(function(e){
    div.addEventListener(e, colorDiv, false)
});
