export default function playerFactory(name) {
	let playerName = name;
	let score = 0;

	function getName() {
		return playerName;
	}

	function setName(newName) {
		playerName = newName;
	}

	function getScore() {
		return score;
	}

	function setScore(num) {
		return (score = num);
	}

	function incrementScore() {
		score++;
	}

	function resetScore() {
		score = 0;
	}

	return { getName, getScore, incrementScore, setName, setScore, resetScore };
}
