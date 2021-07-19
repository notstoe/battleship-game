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

	form {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		background: var(--bg-blue);

		width: 90%;
		height: 19rem;
		max-width: 480px;
		padding: 2.5rem 1.1rem;

		border: 2px solid var(--highlight-yellow);
		box-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);
		border-radius: 72px;

		text-align: center;
	}

	header {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	input {
		width: 90%;
		max-width: 280px;
		height: 2.8rem;

		padding: 0 0.6rem;
		border-radius: 5px;

		font-size: 1.4rem;

		background: var(--fullwhite);
	}

	button {
		margin-top: 1.8rem;
		padding: 1.5rem 3.6rem;
		border-radius: 38px;
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
			/* box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.4); */
			border: 1px inset var(--highlight-yellow);
			transform: scale(0.97);
		}
	}
`;

export default function PlayerModal() {
	const { handleModalInputChange, modalInput, handleSubmit } = useContext(
		GameRulesContext
	);

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
			<motion.form variants={modalVariants}>
				<header>Player's Name:</header>
				<input
					type="text"
					value={modalInput}
					onChange={handleModalInputChange}
				/>
				<button type="submit" onClick={handleSubmit}>
					Play
				</button>
			</motion.form>
		</Overlay>
	);
}
