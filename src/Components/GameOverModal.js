import React, { useContext } from "react";
import { GameRulesContext } from "../contexts/GameContext";

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

	.modal {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		background: var(--bg-blue);

		width: 90%;
		height: 18.7rem;
		max-width: 470px;
		padding: 2.5rem 1.1rem;

		border: 2px solid var(--highlight-yellow);
		box-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);
		border-radius: 60px;
	}

	h1,
	h2 {
		font-size: 1.8rem;
	}

	button {
		margin-top: 0.7rem;
		padding: 1.5rem 3.6rem;
		border-radius: 12px;
		border: 1px solid var(--highlight-yellow);

		background: var(--bg-blue);
		color: var(--highlight-yellow);
		box-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);

		font-family: Special Elite, sans-serif;
		font-size: 1.2rem;
		line-height: 0;

		transition: all 150ms;

		:hover {
			box-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.3);
		}

		:active {
			border: 1px inset var(--highlight-yellow);
			transform: scale(0.97);
		}
	}
`;

export default function GameOverModal() {
	const { resetGame, roundWinner } = useContext(GameRulesContext);

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

	return (
		<Overlay variants={overlayVariants} initial="hidden" animate="visible">
			<motion.div variants={modalVariants} className="modal">
				<h1>{roundWinner} Won!</h1>
				<h2>Game Over!</h2>
				<button onClick={resetGame}>Reset</button>
			</motion.div>
		</Overlay>
	);
}
