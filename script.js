
function createGrid(size) {
    const mainDiv = document.querySelector('.grid');
    let cellSize = 500/size;
    let rowSize = size*cellSize;
    console.log(rowSize);
    
    
    for (let i=0; i<size; i++){
        
        for (let j= 0;j<size; j++){
            let newDiv = document.createElement('div');
            newDiv.style.cssText = `height: ${cellSize}px; width: ${cellSize}px;`;
            mainDiv.appendChild(newDiv);
        };

    };
    
    mainDiv.style.cssText = `width: ${rowSize}px; height: ${rowSize}px`; //doesn't seem to set the width and height
    
};

createGrid(100);

