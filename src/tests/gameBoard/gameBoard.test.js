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

describe("addShip() usage", () => {
	const fakeBoard = gameBoard();
	const shipLength = 3;
	const destroyer = Ship(shipLength);

	it("addShip() available in GameBoard() return", () => {
		expect(fakeBoard).toMatchObject({
			addShip: expect.any(Function),
		});
	});

	it("addShip(i, j, x) returns new board table (10 rows)", () => {
		expect(fakeBoard.addShip(2, 3, "x", destroyer.shipBlocks)).toHaveLength(10); // 10 rows
	});

	it("addShip(i, j, x) returns newBoard table (10 columns / row)", () => {
		expect(fakeBoard.addShip(2, 3, "x", destroyer.shipBlocks)[5]).toHaveLength(
			10
		); // 10 columns
	});

	it("addShip(2, 3, x, 3) returns newBoard with ship in the right coords horizontally", () => {
		const newBoard = fakeBoard.addShip(2, 3, "x", destroyer.shipBlocks);
		for (let j = 3; j < 6; j++) {
			expect(newBoard[2][j]).toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("no shipBlocks in the wrong columns before", () => {
		const newBoard = fakeBoard.addShip(2, 3, "x", destroyer.shipBlocks);
		for (let j = 0; j < 3; j++) {
			expect(newBoard[2][j]).not.toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("no shipBlocks in the wrong columns after", () => {
		const newBoard = fakeBoard.addShip(2, 3, "x", destroyer.shipBlocks);
		for (let j = 6; j < 10; j++) {
			expect(newBoard[2][j]).not.toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("no shipBlocks in the wrong rows before", () => {
		const newBoard = fakeBoard.addShip(2, 3, "x", destroyer.shipBlocks);
		for (let i = 0; i < 2; i++) {
			expect(newBoard[i][3]).not.toEqual({
				wasShot: false,
				shipBlock: { length: 3, isHit: false },
			});
		}
	});

	it("no shipBlocks in the wrong rows after", () => {
		const newBoard = fakeBoard.addShip(2, 3, "x", destroyer.shipBlocks);
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
});
