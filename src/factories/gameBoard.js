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
		return JSON.parse(JSON.stringify(board));
	}

	function addShip(posI, posJ, orientation, shipBlocks) {
		let shipIndex = 0;

		switch (orientation) {
			case "x":
				// checks for placing ships off the grid
				if (posJ + shipBlocks[0].length > 10) return null;

				// checks for existing ships
				for (let j = posJ; j < posJ + shipBlocks[0].length; j++) {
					if ("shipBlock" in board[posI][j]) return null;
				}

				//iterates through the ship position horizontally in board(10x10) + its length
				shipIndex = 0;
				for (let j = posJ; j < posJ + shipBlocks[0].length; j++) {
					board[posI][j] = {
						wasShot: false,
						shipBlock: shipBlocks[shipIndex],
						orientation: orientation,
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
					if ("shipBlock" in board[i][posJ]) return null;
				}

				//iterates through the ship position vertically in board(10x10) + its length
				shipIndex = 0;
				for (let i = posI; i < posI + shipBlocks[0].length; i++) {
					board[i][posJ] = {
						wasShot: false,
						shipBlock: shipBlocks[shipIndex],
						orientation: orientation,
					};
					//increments the shipBlocks Array Index
					shipIndex++;
				}
				break;

			default:
				console.warn("Oops! Something went wrong!");
				break;
		}

		return board;
	}

	function makeShot(posI, posJ) {
		let shotInfo;

		if (posI > 9 || posI < 0) return null; //off grid
		if (posJ > 9 || posJ < 0) return null; //off grid
		if (board[posI][posJ].wasShot === true) return null; //when those coords were already shot

		if ("shipBlock" in board[posI][posJ]) {
			board[posI][posJ].wasShot = true;
			board[posI][posJ].shipBlock.isHit = true;
			shotInfo = {
				shipLength: board[posI][posJ].shipBlock.length,
				blockHit: board[posI][posJ].shipBlock.block,
				isHit: board[posI][posJ].shipBlock.isHit,
			};
		} else {
			board[posI][posJ].wasShot = true;
			shotInfo = "water";
		}

		return shotInfo;
	}

	return { getBoard, addShip, makeShot };
}
