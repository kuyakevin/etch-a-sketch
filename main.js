function populateBoard(size){
    let board = document.querySelector('.board')
    //creates a template for a grid of 16x16 with a width of 1 fr
    board.style.gridTemplateColums = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    //for loop to create square divs inside board
    for(let i = 0; i < 256; i++){
        let square = document.createElement('div')
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16)

function changeSize(input){
    populateBoard(input)
}