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
		let newBoard = JSON.parse(JSON.stringify(board));

		//iterates through the newBoard 10x10

		for (let i = 0; i < 10; i++) {
			let shipIndex = 0;

			for (let j = 0; j < 10; j++) {
				if (i === posI) {
					if (posJ <= j && j < posJ + shipBlocks[0].length) {
						//only falls here for position of adding ship + its length and pushes shipBlocks Array into it
						newBoard[i][j] = {
							wasShot: false,
							shipBlock: shipBlocks[shipIndex],
						};
						//increments the shipBlocks Array Index
						shipIndex++;
					}
				}
			}
		}
		return newBoard;
	}

	return { getBoard, addShip };
}
