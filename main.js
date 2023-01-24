

function gridprinter(gridsize){
    
    const container = document.getElementById("container");
    
            const gridContainer = document.createElement("div");
            gridContainer.classList.add("grid-container");
    
            for (let i = 0; i < gridsize * gridsize; i++) {
                const gridSquare = document.createElement("div");
                gridSquare.classList.add("grid-square");
                gridContainer.appendChild(gridSquare);
            }
    
            container.appendChild(gridContainer);
    
}


    let changeSizeButton = document.getElementById("body-btn");
    changeSizeButton.addEventListener("click", function () {
    
        let size = prompt("Please enter new grid size e.g(18)");
    
        gridprinter(size)
    
      })
