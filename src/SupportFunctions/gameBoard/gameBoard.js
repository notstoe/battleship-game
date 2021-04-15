export default function gameBoard() {
	let board = [];

	for (let i = 0; i < 10; i++) {
		let row = [];
		for (let j = 0; j < 10; j++) {
			row.push({ wasShot: false });
		}
		board.push(row);
	}

	function getBoard() {
		return board;
	}

	function addShip(posI, posJ, orientation, shipBlocks) {
		let newBoard = JSON.parse(JSON.stringify(getBoard()));

		// checks for placing ships off the grid
		if (posJ + shipBlocks[0].length > 9) return null;

		// checks for existing ships
		for (let j = posJ; j < posJ + shipBlocks[0].length; j++) {
			if ("shipBlock" in newBoard[posI][j]) return null;
		}

		//iterates through the ship position horizontally in newBoard(10x10) + its length
		let shipIndex = 0;
		for (let j = posJ; j < posJ + shipBlocks[0].length; j++) {
			newBoard[posI][j] = {
				wasShot: false,
				shipBlock: shipBlocks[shipIndex],
			};
			//increments the shipBlocks Array Index
			shipIndex++;
		}
		board = newBoard;
		return newBoard;
	}

	return { getBoard, addShip };
}
