import Ship from "../../SupportFunctions/ship/Ship";

it("returns ship object with correct structure", () => {
	expect(Ship(1)).toMatchObject({
		shipBlocks: [{ length: 1, isHit: false }],
		isSunk: false,
		takeHit: expect.any(Function),
	});
});

it("returns ship object with correct length", () => {
	expect(Ship(3)).toEqual({
		shipBlocks: [
			{ length: 3, isHit: false },
			{ length: 3, isHit: false },
			{ length: 3, isHit: false },
		],
		isSunk: false,
		takeHit: expect.any(Function),
	});
});

describe("testing dmg to a ship of length 4", () => {
	let battleship;
	let fakeState;

	beforeEach(() => {
		battleship = Ship(4);
	});

	it("returns new ship with target block hit", () => {
		expect(battleship.takeHit(0)).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true },
				{ length: 4, isHit: false },
				{ length: 4, isHit: false },
				{ length: 4, isHit: false },
			],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("testing assigning to fakeState with block hit", () => {
		fakeState = battleship.takeHit(0);
		expect(fakeState).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true },
				{ length: 4, isHit: false },
				{ length: 4, isHit: false },
				{ length: 4, isHit: false },
			],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("returns already dmged ship with target block hit", () => {
		expect(fakeState.takeHit(2)).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true },
				{ length: 4, isHit: false },
				{ length: 4, isHit: true },
				{ length: 4, isHit: false },
			],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("returns already dmged ship with target block hit", () => {
		expect(fakeState.takeHit(1)).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true },
				{ length: 4, isHit: true },
				{ length: 4, isHit: true },
				{ length: 4, isHit: false },
			],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("returns a sunkShip when all blocks are hit", () => {
		expect(fakeState.takeHit(3)).toEqual({
			shipBlocks: [
				{ length: 4, isHit: true },
				{ length: 4, isHit: true },
				{ length: 4, isHit: true },
				{ length: 4, isHit: true },
			],
			isSunk: true,
			takeHit: expect.any(Function),
		});
	});
});
