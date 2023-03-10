// Define the size of the game board grid
const ROWS = 20;
const COLS = 10;

// Get a reference to the game board container
const gameBoard = document.getElementById("game-board");

// Create the game board grid using a two-dimensional array
const boardGrid = [];
for (let row = 0; row < ROWS; row++) {
	boardGrid[row] = [];
	for (let col = 0; col < COLS; col++) {
		// Create a new cell element
		const cell = document.createElement("div");
		cell.classList.add("cell");
		// Add the cell to the game board container
		gameBoard.appendChild(cell);
		// Add the cell to the current row of the board grid
		boardGrid[row][col] = cell;
	}
}
