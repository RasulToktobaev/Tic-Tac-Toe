let currentPlayer = "X";

const gameBoard = Array(9).fill('')
const board = document.querySelector('#game-board')

function renderBoard (){
    board.innerHTML = gameBoard.map((val, idx) => `<div class="ceil ${idx}">${val}</div>`)
        .join('')
}

function handleCeilClick (e) {
    const clickedCell = e.target
    const cellIndex = Array.from(board.children).indexOf(clickedCell)
    if(gameBoard[cellIndex] !== "") return
    gameBoard[cellIndex] = currentPlayer
    clickedCell.classList.add(currentPlayer)
    renderBoard()
    if(checkIn()){
        alert(`Player ${currentPlayer} wins!`)
        resetBoard()
    }else if(!gameBoard.includes('')){
        alert('It s a draw')
        resetBoard()
    }else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }


}

function checkIn () {
    const winningCombinations = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for(const combination of winningCombinations){
        const [a,b,c] = combination
        if(gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
            return true
        }
    }
    return  false
}

function resetBoard () {
    currentPlayer = "X"
    gameBoard.fill('')
    renderBoard()
}

board.addEventListener('click', handleCeilClick)

renderBoard()



