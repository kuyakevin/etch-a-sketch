let board = document.querySelector('.board')

//creates a grid of 16x16 with a width of 1 fr
board.style.gridTemplateColums = 'repeat(16, 1fr)'
board.style.gridTemplateRows = 'repeat(16, 1fr)'

for(let i = 0; i < 256; i++){
    let square = document.createElement('div')
    square.style.backgroundColor = 'blue';
    board.insertAdjacentElement("beforeend", square);
}