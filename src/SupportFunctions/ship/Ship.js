export default function Ship(length) {
	let shipBlocks = [];

	for (let i = 0; i < length; i++) {
		shipBlocks.push({ length: length, isHit: false, block: i });
	}

	function sinkShip() {
		const sunkShip = { ...ship, isSunk: true };

		return sunkShip;
	}

	function takeHit(index) {
		let dmgedShip = { ...ship };

		dmgedShip.shipBlocks[index].isHit = true;

		const checkDmg = dmgedShip.shipBlocks.filter((block) => block.isHit); //check if all blocks are hit or not
		if (checkDmg.length === dmgedShip.shipBlocks.length) {
			return sinkShip();
		} else {
			return dmgedShip;
		}
	}

	const ship = {
		shipBlocks: shipBlocks,
		isSunk: false,
		takeHit: takeHit,
	};

	return ship;
}
