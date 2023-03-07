const gridContainer = document.querySelector('#gridContainer');

gridSize();

function gridSize(x = 20) {
    for(i=0; i < x; i++){
        let row = document.createElement('div')
        row.className='row'
        for(j=1; j<=x; j++){
            let square = document.createElement('div')
            square.className='gridSquare'
            square.style.border='thin solid black'
            square.addEventListener('mouseover', () => {
                square.style.background = 'red'
            })
            row.appendChild(square)
        }
        gridContainer.appendChild(row)
    }
}

function changeSize(){
    let sizeInput = prompt('Please enter desired grid size (Ex: 32 = 32x32 grid)') 
    if (sizeInput <= 0 || sizeInput == 100 || isNaN(sizeInput)) {
        alert('Invalid input')
    }else{
        gridSize(sizeInput)
    } 
}