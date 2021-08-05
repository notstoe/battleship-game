import React, { useContext } from "react";
import { AuthRulesContext } from "../contexts/AuthContext";

import styled from "styled-components";
import { motion } from "framer-motion";

const Overlay = styled(motion.div)`
	background: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: Special Elite, sans-serif;
	font-size: 1.4rem;
	color: var(--highlight-yellow);
`;

const LeaderboardsWrap = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: var(--bg-blue);

	width: 90%;
	max-width: 810px;
	max-height: 95%;

	padding: 1.6rem 2rem;

	box-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);
	border: 2px solid var(--highlight-yellow);
	border-radius: 20px;

	transition: all 0.15s ease-out;

	h2 {
		font-size: 1.7rem;
		line-height: 2.2rem;

		margin-bottom: 0.8rem;
		padding-top: 1rem;
	}

	.scoresContainer {
		flex: 1;

		width: 100%;

		overflow-y: auto;

		display: flex;
		flex-direction: column;
	}

	.individualScore {
		width: 100%;

		display: flex;
		justify-content: space-between;

		line-height: 2rem;
		padding: 1rem 1rem 0.7rem 0;
		margin-bottom: 0.5rem;

		border-bottom: 1px solid var(--highlight-yellow);
	}

	button {
		margin-top: 1.7rem;
		padding: 1.5rem 3.6rem;
		border-radius: 38px;
		border: 1px solid var(--highlight-yellow);

		background: var(--bg-blue);
		color: var(--highlight-yellow);
		box-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);

		font-family: Special Elite, sans-serif;
		font-size: 1.1rem;
		line-height: 0;

		transition: all 150ms;

		:hover {
			box-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.3);
		}

		:active {
			border: 1px inset var(--highlight-yellow);
			transform: scale(0.97);
		}

		@media (max-width: 420px) {
			font-size: 1.1rem;
			padding: 1.5rem 2rem;
		}
	}
`;

export default function LeaderboardsModal() {
	const { toggleLeaderboards, savedDocs } = useContext(AuthRulesContext);

	const overlayVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.2 } },
	};

	const modalVariants = {
		hidden: { opacity: 0, scale: 0.6 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.15, delay: 0.1 },
		},
	};

	const playersDivs = savedDocs.map((doc, index) => {
		return (
			<div key={index} className="individualScore">
				<span>
					{doc.data().nickname}'s Wins: {doc.data().score}
				</span>
				<span>AI: {doc.data().scoreAI}</span>
			</div>
		);
	});

	return (
		<Overlay variants={overlayVariants} initial="hidden" animate="visible">
			<LeaderboardsWrap variants={modalVariants}>
				<h2>Battleship Leaderboards</h2>
				<div className="scoresContainer">{playersDivs}</div>
				<button type="button" onClick={toggleLeaderboards}>
					Close
				</button>
			</LeaderboardsWrap>
		</Overlay>
	);
}
