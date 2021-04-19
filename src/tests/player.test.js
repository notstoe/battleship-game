import player from "../factories/player";

describe("player() factory Usage", () => {
	const player1 = player("Gustavo");

	it("player returns object matching such structure", () => {
		expect(player1).toMatchObject({
			getScore: expect.any(Function),
			getName: expect.any(Function),
			incrementScore: expect.any(Function),
			setName: expect.any(Function),
			resetScore: expect.any(Function),
		});
	});

	it("player getScore returns 0 initially", () => {
		expect(player1.getScore()).toBe(0);
	});

	it("player incrementScore returns 1 after won game", () => {
		player1.incrementScore();
		expect(player1.getScore()).toBe(1);
	});

	it("player getName returns player's name", () => {
		expect(player1.getName()).toMatch("Gustavo");
	});

	it("player setName changes player's name", () => {
		player1.setName("Tonin");

		expect(player1.getName()).toMatch("Tonin");
	});

	it("player resetScore resets the score to 0", () => {
		player1.resetScore();

		expect(player1.getScore()).toBe(0);
	});
});
