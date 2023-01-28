const container = document.querySelector('.container');
const blackButton = document.createElement('button');
const grayButton = document.createElement('button');
const rgbButton = document.createElement('button');
const sizeButton = document.createElement('button');  
const buttonsContainer = document.querySelector('buttons')


function gridprinter(col,rows){

    for (let i = 0; i < (col * rows); i++) {
        const div = document.createElement("div");
        div.style.border = "1px solid  gray"
        container.style.gridTemplateColumns = `repeat(${col}, ifr)`;
        container.style.gridTemplateRows = `repeat(${rows}, ifr)`;
        container.appendChild(div).classList.add('box');
    }
}


gridprinter(16,16);






