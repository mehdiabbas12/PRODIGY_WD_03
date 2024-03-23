let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

function cellClicked(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    renderBoard();
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  for (let combination of winCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      document.getElementById('result').innerText = `${board[a]} wins!`;
      return;
    }
  }
  if (!board.includes('')) {
    gameActive = false;
    document.getElementById('result').innerText = "It's a draw!";
  }
}

function renderBoard() {
  board.forEach((value, index) => {
    document.getElementsByClassName('cell')[index].innerText = value;
  });
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('result').innerText = '';
  renderBoard();
}
