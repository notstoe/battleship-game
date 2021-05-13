import React from "react";
import Board from "./Components/Board";
import { MainWrapper, Title, ContentWrapper, Image } from "./styles";

function App() {
	return (
		<MainWrapper>
			<Title>
				<Image title src="assets/battleshipTitle.png" alt="battleship" />
				<Image icon src="assets/battleship.svg" alt="battleship icon" />
			</Title>
			<ContentWrapper>
				<h1>Click on your board to place your ships!</h1>
				<div>
					<Board />
					<Board />
				</div>
			</ContentWrapper>
		</MainWrapper>
	);
}

export default App;
