import Ship from "../../SupportFunctions/ship/Ship";

it("returns ship object with correct structure", () => {
	expect(Ship(1)).toMatchObject({
		shipBlocks: [{ isHit: false }],
		isSunk: false,
		takeHit: expect.any(Function),
	});
});

it("returns ship object with correct length", () => {
	expect(Ship(3)).toEqual({
		shipBlocks: [{ isHit: false }, { isHit: false }, { isHit: false }],
		isSunk: false,
		takeHit: expect.any(Function),
	});
});

describe("testing dmg to a ship of length 3", () => {
	let destroyer;
	let fakeState;

	beforeEach(() => {
		destroyer = Ship(3);
	});

	it("returns new ship with target block hit", () => {
		expect(destroyer.takeHit(0)).toEqual({
			shipBlocks: [{ isHit: true }, { isHit: false }, { isHit: false }],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("testing assigning to fakeState with block hit", () => {
		fakeState = destroyer.takeHit(0);
		expect(fakeState).toEqual({
			shipBlocks: [{ isHit: true }, { isHit: false }, { isHit: false }],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("returns already dmged ship with target block hit", () => {
		expect(fakeState.takeHit(2)).toEqual({
			shipBlocks: [{ isHit: true }, { isHit: false }, { isHit: true }],
			isSunk: false,
			takeHit: expect.any(Function),
		});
	});

	it("returns a sunkShip when all blocks are hit", () => {
		expect(fakeState.takeHit(1)).toEqual({
			shipBlocks: [{ isHit: true }, { isHit: true }, { isHit: true }],
			isSunk: true,
			takeHit: expect.any(Function),
		});
	});
});
