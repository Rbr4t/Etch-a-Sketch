
for (let i=0; i<16; i++){
    const mainDiv = document.querySelector('.grid');
    let newDiv = document.createElement('div');
    newDiv.style.cssText = 'background-color: gray; border: 1px solid black;'
    //const text = document.createTextNode('test');
    //newDiv.appendChild(text);
    mainDiv.appendChild(newDiv);
}