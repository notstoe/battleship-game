import React, { useContext } from "react";
import { GameRulesContext } from "./contexts/GameContext";

import Board from "./Components/Board";
import FlavorSubtitle from "./Components/FlavorSubtitle";

import battleshipTitle from "./assets/battleshipTitle.png";
import battleshipIcon from "./assets/battleship.svg";

import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const MainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100vw;
	min-height: 100vh;

	background: var(--bg-blue);
	padding: 0.8rem 0.2rem;

	transition: all 0.2s ease-in;
`;

const Title = styled(motion.h1)`
	display: flex;
	justify-content: center;

	width: 100%;
	max-width: 410px;
`;

const Image = styled(motion.img)`
	${({ title }) =>
		title &&
		css`
			width: 17.8rem;
			height: 6rem;
		`}

	${({ icon }) =>
		icon &&
		css`
			flex: 0.6;
			align-self: center;

			width: 5rem;
			height: 5.3rem;

			@media (min-width: 900px) {
				flex: 1;
			}
		`}
`;

const ContentWrapper = styled(motion.div)`
	flex: 1;
	width: 100%;
	max-width: 1100px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

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
	const { showPage } = useContext(GameRulesContext);

	const contentVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.6 } },
	};

	const titleVariants = {
		hidden: { y: "-50vh", scale: 0.5 },
		visible: {
			y: 0,
			scale: 1,
			transition: { type: "spring", delay: 0.8, duration: 0.5 },
		},
	};

	return (
		<MainWrapper>
			{showPage && (
				<>
					<Title variants={titleVariants} initial="hidden" animate="visible">
						<Image title src={battleshipTitle} alt="battleship" />
						<Image icon src={battleshipIcon} alt="battleship icon" />
					</Title>
					<ContentWrapper
						variants={contentVariants}
						initial="hidden"
						animate="visible"
					>
						<FlavorSubtitle />
						<div className="gameArea">
							<Board player={"human"} />
							<Board player={"AI"} />
						</div>
					</ContentWrapper>
				</>
			)}
		</MainWrapper>
	);
}

export default App;
