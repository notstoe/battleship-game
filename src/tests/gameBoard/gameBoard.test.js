import gameBoard from "../../SupportFunctions/gameBoard/gameBoard";
import Ship from "../../SupportFunctions/ship/Ship";

describe("getBoard() structure and usage", () => {
	const fakeBoard = gameBoard();

	it("getBoard() available in GameBoard() return", () => {
		expect(fakeBoard).toMatchObject({
			getBoard: expect.any(Function),
		});
	});

	it("getBoard() returns board table with 10 rows", () => {
		expect(fakeBoard.getBoard()).toHaveLength(10); // 10 rows
	});

	it("getBoard() returns board table with 10 columns in a row (10x10)", () => {
		expect(fakeBoard.getBoard()[2]).toHaveLength(10); // 10 columns
	});

	it("random board element in the table is an object with boolean wasShot", () => {
		expect(fakeBoard.getBoard()[4][6]).toEqual({ wasShot: false }); // 10 columns
	});
});

describe("addShip() usage horizontally", () => {
	const fakeBoard = gameBoard();
	const destroyer = Ship(3);
	const submarine = Ship(2);

	it("addShip(...) available in GameBoard() return", () => {
		expect(fakeBoard).toMatchObject({
			addShip: expect.any(Function),
		});
	});

	it("addShip(...) returns newBoard with ship in the right coords horizontally", () => {
		const newBoard = fakeBoard.addShip(2, 3, "x", destroyer.shipBlocks);
		for (let j = 3; j < 6; j++) {
			expect(newBoard[2][j]).toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("board was saved as newBoard table with 10 rows", () => {
		expect(fakeBoard.getBoard()).toHaveLength(10); // 10 rows
	});

	it("aboard was saved as newBoard table with 10 columns in a row)", () => {
		expect(fakeBoard.getBoard()[5]).toHaveLength(10); // 10 columns
	});

	it("no shipBlocks in the wrong columns before coords", () => {
		const newBoard = fakeBoard.getBoard();
		for (let j = 0; j < 3; j++) {
			expect(newBoard[2][j]).not.toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("no shipBlocks in the wrong columns after coords", () => {
		const newBoard = fakeBoard.getBoard();
		for (let j = 6; j < 10; j++) {
			expect(newBoard[2][j]).not.toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("no shipBlocks in the wrong rows before coords", () => {
		const newBoard = fakeBoard.getBoard();
		for (let i = 0; i < 2; i++) {
			expect(newBoard[i][3]).not.toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("no shipBlocks in the wrong rows after coords", () => {
		const newBoard = fakeBoard.getBoard();
		for (let i = 3; i < 10; i++) {
			expect(newBoard[i][3]).not.toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("returns newBoard with ship placed before", () => {
		const newBoard = fakeBoard.getBoard();

		for (let j = 3; j < 6; j++) {
			expect(newBoard[2][j]).toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("fails to add a ship in the same coordinates as another one", () => {
		const newBoard = fakeBoard.addShip(2, 5, "x", submarine.shipBlocks);

		expect(newBoard).toEqual(null);
	});

	it("fails to add a ship if coords are off the 10x10 grid", () => {
		const newBoard = fakeBoard.addShip(3, 9, "x", submarine.shipBlocks);

		expect(newBoard).toEqual(null);
	});
});

describe("addShip() usage vertically", () => {
	const fakeBoard = gameBoard();
	const destroyer = Ship(3);
	const submarine = Ship(2);

	it("addShip(...) returns newBoard with ship in the right coords vertically", () => {
		const newBoard = fakeBoard.addShip(4, 2, "y", destroyer.shipBlocks);
		for (let i = 4; i < 7; i++) {
			expect(newBoard[i][2]).toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("returns newBoard with ship placed before", () => {
		const newBoard = fakeBoard.getBoard();

		for (let i = 4; i < 7; i++) {
			expect(newBoard[i][2]).toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("fails to add a ship in the same coordinates as existing one", () => {
		const newBoard = fakeBoard.addShip(5, 2, "y", submarine.shipBlocks);

		expect(newBoard).toEqual(null);
	});

	it("fails to add a ship if coords are off the 10x10 grid", () => {
		const newBoard = fakeBoard.addShip(9, 4, "y", submarine.shipBlocks);

		expect(newBoard).toEqual(null);
	});
});
