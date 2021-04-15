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
		let shipIndex = 0;

		switch (orientation) {
			case "x":
				// checks for placing ships off the grid
				if (posJ + shipBlocks[0].length > 10) return null;

				// checks for existing ships
				for (let j = posJ; j < posJ + shipBlocks[0].length; j++) {
					if ("shipBlock" in newBoard[posI][j]) return null;
				}

				//iterates through the ship position horizontally in newBoard(10x10) + its length
				shipIndex = 0;
				for (let j = posJ; j < posJ + shipBlocks[0].length; j++) {
					newBoard[posI][j] = {
						wasShot: false,
						shipBlock: shipBlocks[shipIndex],
					};
					//increments the shipBlocks Array Index
					shipIndex++;
				}
				break;

			case "y":
				// checks for placing ships off the grid
				if (posI + shipBlocks[0].length > 10) return null;

				// checks for existing ships
				for (let i = posI; i < posI + shipBlocks[0].length; i++) {
					if ("shipBlock" in newBoard[i][posJ]) return null;
				}

				//iterates through the ship position horizontally in newBoard(10x10) + its length
				shipIndex = 0;
				for (let i = posI; i < posI + shipBlocks[0].length; i++) {
					newBoard[i][posJ] = {
						wasShot: false,
						shipBlock: shipBlocks[shipIndex],
					};
					//increments the shipBlocks Array Index
					shipIndex++;
				}
				break;

			default:
				console.alert("Oops! Something went wrong!");
				break;
		}

		board = newBoard;
		return newBoard;
	}

	return { getBoard, addShip };
}
