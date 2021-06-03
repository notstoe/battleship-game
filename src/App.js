import React, { useContext } from "react";
import Board from "./Components/Board";
import { GameRulesContext, GameRulesProvider } from "./contexts/GameContext";
import { MainWrapper, Title, ContentWrapper, Image } from "./styles";

function App() {
	// TODO - move styles inside this file, delete styles.js

	const { players } = useContext(GameRulesContext);

	return (
		<GameRulesProvider>
			<MainWrapper>
				<Title>
					<Image title src="assets/battleshipTitle.png" alt="battleship" />
					<Image icon src="assets/battleship.svg" alt="battleship icon" />
				</Title>
				<ContentWrapper>
					<h1>Click on your board to place your ships!</h1>
					<div className="gameArea">
						<Board player={players && players[0]} />
						<Board player={players && players[1]} />
					</div>
				</ContentWrapper>
			</MainWrapper>
		</GameRulesProvider>
	);
}

export default App;
