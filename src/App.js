import React from "react";

import Board from "./Components/Board";
import { GameRulesProvider } from "./contexts/GameContext";

import styled, { css } from "styled-components";

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100vw;
	min-height: 100vh;

	background: var(--bg-blue);
	padding: 0.8rem 3rem;
`;

const Title = styled.h1`
	display: flex;
	justify-content: center;

	width: 100%;
	max-width: 410px;
`;

const Image = styled.img`
	${({ title }) =>
		title &&
		css`
			width: 17.8rem;
			height: 6rem;
		`}

	${({ icon }) =>
		icon &&
		css`
			flex: 1;
			align-self: center;

			width: 5rem;
			height: 5.3rem;
		`}
`;

const ContentWrapper = styled.div`
	flex: 1;
	width: 100%;
	max-width: 1100px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h1 {
		font-family: Special Elite, sans-serif;
		font-size: 1.6rem;
		text-align: center;

		color: var(--highlight-yellow);
		margin: 2.3rem 0;
	}

	.gameArea {
		flex: 1;

		display: grid;
		place-items: center;

		width: 100%;

		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		grid-template-rows: auto;
		row-gap: 3rem;
	}
`;

function App() {
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
						<Board player={"human"} />
						<Board player={"AI"} />
					</div>
				</ContentWrapper>
			</MainWrapper>
		</GameRulesProvider>
	);
}

export default App;
