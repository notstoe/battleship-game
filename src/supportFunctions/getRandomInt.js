export function getRandomInt(min, max) {
	// returns random int in [min, max]
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomXorY() {
	const random = getRandomInt(0, 1);

	if (random === 0) return "x";
	if (random === 1) return "y";
}
