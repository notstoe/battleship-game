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
		fakeBoard.addShip(2, 3, "x", destroyer.shipBlocks);

		expect(fakeBoard.getBoard()[2][4]).toEqual({
			wasShot: false,
			shipBlock: { length: 3, isHit: false, block: 1 },
			orientation: "x",
		});
	});

	it("board was saved as table with 10 rows", () => {
		expect(fakeBoard.getBoard()).toHaveLength(10); // 10 rows
	});

	it("board was saved as table with 10 columns in a row)", () => {
		expect(fakeBoard.getBoard()[5]).toHaveLength(10); // 10 columns
	});

	it("no shipBlocks in the wrong columns before coords", () => {
		for (let j = 0; j < 3; j++) {
			expect(fakeBoard.getBoard()[2][j]).not.toEqual({
				wasShot: false,
				shipBlock: expect.any(Object),
				orientation: "x",
			});
		}
	});

	it("no shipBlocks in the wrong columns after coords", () => {
		for (let j = 6; j < 10; j++) {
			expect(fakeBoard.getBoard()[2][j]).not.toEqual({
				wasShot: false,
				shipBlock: expect.any(Object),
				orientation: "x",
			});
		}
	});

	it("no shipBlocks in the wrong rows before coords", () => {
		for (let i = 0; i < 2; i++) {
			expect(fakeBoard.getBoard()[i][3]).not.toEqual({
				wasShot: false,
				shipBlock: expect.any(Object),
				orientation: "x",
			});
		}
	});

	it("no shipBlocks in the wrong rows after coords", () => {
		for (let i = 3; i < 10; i++) {
			expect(fakeBoard.getBoard()[i][3]).not.toEqual({
				wasShot: false,
				shipBlock: expect.any(Object),
				orientation: "x",
			});
		}
	});

	it("fails to add a ship in the same coordinates as another one", () => {
		expect(fakeBoard.addShip(2, 5, "x", submarine.shipBlocks)).toEqual(null);
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
		fakeBoard.addShip(4, 2, "y", destroyer.shipBlocks);

		expect(fakeBoard.getBoard()[5][2]).toEqual({
			wasShot: false,
			shipBlock: { length: 3, isHit: false, block: 1 },
			orientation: "y",
		});
	});

	it("fails to add a ship in the same coordinates as existing one", () => {
		expect(fakeBoard.addShip(5, 2, "y", submarine.shipBlocks)).toEqual(null);
	});

	it("fails to add a ship if coords are off the 10x10 grid", () => {
		expect(fakeBoard.addShip(9, 4, "y", submarine.shipBlocks)).toEqual(null);
	});
});

describe("makeShot(posI, posJ) usage", () => {
	const fakeBoard = gameBoard();
	const carrier = Ship(5);

	// placing a ship to shoot it afterwards
	fakeBoard.addShip(5, 6, "y", carrier.shipBlocks);

	it("makeShot(posI, posJ) available in GameBoard() return", () => {
		expect(fakeBoard).toMatchObject({
			makeShot: expect.any(Function),
		});
	});

	it("makeShot returns water when not hitting a ship", () => {
		expect(fakeBoard.makeShot(1, 3)).toEqual("water");
	});

	it("first shot in the water saved on the board", () => {
		expect(fakeBoard.getBoard()[1][3]).toEqual({ wasShot: true });
	});

	it("makeShot returns info obj when hitting a ship", () => {
		expect(fakeBoard.makeShot(6, 6)).toEqual({
			shipLength: 5,
			isHit: true,
			blockHit: 1,
		});
	});

	it("first shot in a ship saved on the board", () => {
		expect(fakeBoard.getBoard()[6][6]).toEqual({
			wasShot: true,
			shipBlock: { length: 5, isHit: true, block: 1 },
			orientation: "y",
		});
	});

	it("second shot in a water coord already hit, returns null", () => {
		expect(fakeBoard.makeShot(1, 3)).toEqual(null);
	});

	it("second shot in a ship coord already hit, returns null", () => {
		expect(fakeBoard.makeShot(6, 6)).toEqual(null);
	});
});
