export default function player(name) {
	let playerName = name;
	let score = 0;

	function getName() {
		return JSON.parse(JSON.stringify(playerName));
	}

	function setName(newName) {
		playerName = newName;
	}

	function getScore() {
		return JSON.parse(JSON.stringify(score));
	}

	function incrementScore() {
		score++;
	}
	return { getName, getScore, incrementScore, setName };
}
