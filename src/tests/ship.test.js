import ship from "../factories/ship";

it("returns ship object with correct structure", () => {
	expect(ship(1)).toMatchObject({
		shipBlocks: [{ length: 1, isHit: false, block: 0 }],
		isSunk: false,
		takeHit: expect.any(Function),
	});
});

it("returns ship object with correct length", () => {
	expect(ship(3)).toEqual({
		shipBlocks: [
			{ length: 3, isHit: false, block: 0 },
			{ length: 3, isHit: false, block: 1 },
			{ length: 3, isHit: false, block: 2 },
		],
		isSunk: false,
		takeHit: expect.any(Function),
	});
});

describe("testing dmg to a ship of length 4", () => {
	let battleship;
	let fakeState;

	beforeEach(() => {
		battleship = ship(4);
	});

	it("returns new ship with target block hit", () => {
		expect(battleship.takeHit(0)).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true, block: 0 },
				{ length: 4, isHit: false, block: 1 },
				{ length: 4, isHit: false, block: 2 },
				{ length: 4, isHit: false, block: 3 },
			],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("testing assigning to fakeState with block hit", () => {
		fakeState = battleship.takeHit(0);
		expect(fakeState).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true, block: 0 },
				{ length: 4, isHit: false, block: 1 },
				{ length: 4, isHit: false, block: 2 },
				{ length: 4, isHit: false, block: 3 },
			],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("returns already dmged ship with target block hit", () => {
		expect(fakeState.takeHit(2)).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true, block: 0 },
				{ length: 4, isHit: false, block: 1 },
				{ length: 4, isHit: true, block: 2 },
				{ length: 4, isHit: false, block: 3 },
			],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("returns already dmged ship with 2 targets block hit", () => {
		expect(fakeState.takeHit(1)).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true, block: 0 },
				{ length: 4, isHit: true, block: 1 },
				{ length: 4, isHit: true, block: 2 },
				{ length: 4, isHit: false, block: 3 },
			],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("returns a sunkShip when all blocks are hit", () => {
		expect(fakeState.takeHit(3)).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true, block: 0 },
				{ length: 4, isHit: true, block: 1 },
				{ length: 4, isHit: true, block: 2 },
				{ length: 4, isHit: true, block: 3 },
			],
			isSunk: true,
			takeHit: expect.any(Function),
		});
	});
});
