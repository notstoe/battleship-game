import React from "react";
import { MainWrapper, Title, ContentWrapper, StyledImage } from "./styles";

function App() {
	return (
		<MainWrapper>
			<Title>
				<StyledImage title src="assets/battleshipTitle.png" alt="battleship" />
				<StyledImage icon src="assets/battleship.svg" alt="battleship icon" />
			</Title>
			<ContentWrapper>
				<div>Hello World</div>
			</ContentWrapper>
		</MainWrapper>
	);
}

export default App;
