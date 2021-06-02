import React, { useState } from "react";
import Board from "./Components/Board";
import player from "./factories/player";
import { MainWrapper, Title, ContentWrapper, Image } from "./styles";

function App() {
	const playerH = player("Gustavo");
	const playerAI = player("AI");

	const [player1, setPlayer1] = useState({
		name: playerH.getName(),
		score: playerH.getScore(),
	});
	const [player2, setPlayer2] = useState({
		name: playerAI.getName(),
		score: playerAI.getScore(),
	});

	return (
		<MainWrapper>
			<Title>
				<Image title src="assets/battleshipTitle.png" alt="battleship" />
				<Image icon src="assets/battleship.svg" alt="battleship icon" />
			</Title>
			<ContentWrapper>
				<h1>Click on your board to place your ships!</h1>
				<div className="gameArea">
					<Board player={player1} />
					<Board player={player2} />
				</div>
			</ContentWrapper>
		</MainWrapper>
	);
}

export default App;
