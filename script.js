const mainDiv = document.querySelector('.grid');
let size = 6

for (let i=0; i<size; i++){
    
    for (let j= 0;j<size; j++){
        let newDiv = document.createElement('div');
        newDiv.style.cssText = 'height: 10px; width: 10px;';
    
        mainDiv.appendChild(newDiv);
    };
    
    
};
mainDiv.style.cssText = `width: ${size*10}; height: ${size*10};`;