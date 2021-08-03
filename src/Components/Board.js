import React, { useContext } from "react";
import { GameRulesContext } from "../contexts/GameContext";
import { AuthContext } from "../contexts/AuthContext";

import { motion } from "framer-motion";
import styled from "styled-components";

const BoardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h2,
	span {
		font-family: Special Elite, sans-serif;
		font-size: 1.4rem;

		color: var(--highlight-yellow);

		margin-bottom: 1rem;
	}

	footer {
		width: 100%;

		display: flex;
		justify-content: space-between;

		.rotateBtn {
			margin: 1rem auto 0 auto;
		}
	}

	button {
		padding: 1rem 2rem;
		margin-top: 1rem;
		border-radius: 38px;
		border: 1px solid var(--highlight-yellow);

		background: var(--bg-blue);
		color: var(--highlight-yellow);
		box-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);

		font-family: Special Elite, sans-serif;
		font-size: 1.1rem;
		line-height: 0.7rem;

		transition: all 150ms;

		:hover {
			box-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.3);
		}

		:active {
			border: 1px inset var(--highlight-yellow);
			transform: scale(0.97);
		}
	}

	.emptyFooter {
		padding-bottom: 3.8rem;
	}
`;

const IndividualBoard = styled.div`
	box-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);
	border-radius: 3px;

	.row {
		display: flex;
		justify-content: center;
	}

	.col {
		width: 2rem;
		height: 2rem;
		border: 1px var(--light-black) solid;

		cursor: pointer;

		font-family: Nunito, sans-serif;
		font-size: 2.4rem;
		text-align: center;
		line-height: 2rem;

		transition: all 0.15s ease-out;
	}
`;

function Board({ player }) {
	const {
		stateBoardHuman,
		stateBoardAI,
		handleBoardClick,
		handleOrientationBtnClick,
		handleChangeNameBtnClick,
		handleResetBtnClick,
		counter,
	} = useContext(GameRulesContext);

	const { playersCtx } = useContext(AuthContext);

	const btnVariants = {
		hidden: { x: "-30vh", opacity: 0 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: "spring", duration: 1, delay: 2 },
		},
		exit: { opacity: 0, transition: { duration: 0.5 } },
	};

	const btnsInGameVariants = {
		hidden: { scale: 0.1, opacity: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.18 },
		},
	};

	const boardDivsHuman = stateBoardHuman.map((row, rowIndex) => {
		return (
			<div key={rowIndex} row={rowIndex} className="row">
				{row.map((col, colIndex) => {
					return (
						<div
							key={colIndex}
							col={colIndex}
							className="col"
							shipblock={
								col.shipBlock ? JSON.stringify(col.shipBlock) : undefined
							}
							style={
								col.wasShot
									? col.shipBlock
										? { backgroundColor: "#183f57", color: "#ffc678" }
										: { backgroundColor: "#6baad1" }
									: col.shipBlock
									? { backgroundColor: "#183f57" }
									: { backgroundColor: "#ffc678" }
							}
							onClick={(e) => {
								handleBoardClick("human", rowIndex, colIndex);
							}}
						>
							{col.wasShot && "X"}
						</div>
					);
				})}
			</div>
		);
	});

	const boardDivsAI = stateBoardAI.map((row, rowIndex) => {
		return (
			<div key={rowIndex} row={rowIndex} className="row">
				{row.map((col, colIndex) => {
					return (
						<div
							key={colIndex}
							col={colIndex}
							className="col"
							shipblock={
								col.shipBlock ? JSON.stringify(col.shipBlock) : undefined
							}
							style={
								col.wasShot
									? col.shipBlock
										? { backgroundColor: "#183f57", color: "#ffc678" }
										: { backgroundColor: "#6baad1" }
									: { backgroundColor: "#ffc678" }
							}
							onClick={() => {
								handleBoardClick("AI", rowIndex, colIndex);
							}}
						>
							{col.wasShot && "X"}
						</div>
					);
				})}
			</div>
		);
	});

	if (player === "human") {
		return (
			<BoardWrapper>
				<h2>
					{playersCtx.human ? playersCtx.human.getName() + ": " : "Player: "}
					<span>{playersCtx.human ? playersCtx.human.getScore() : "0"}</span>
				</h2>
				<IndividualBoard>{boardDivsHuman}</IndividualBoard>
				<motion.footer
					variants={btnVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					{counter < 5 ? (
						<button className="rotateBtn" onClick={handleOrientationBtnClick}>
							rotate
						</button>
					) : (
						<>
							<motion.button
								variants={btnsInGameVariants}
								initial="hidden"
								animate="visible"
								onClick={handleChangeNameBtnClick}
							>
								Change Name
							</motion.button>
							<motion.button
								variants={btnsInGameVariants}
								initial="hidden"
								animate="visible"
								onClick={handleResetBtnClick}
							>
								Reset
							</motion.button>
						</>
					)}
				</motion.footer>
			</BoardWrapper>
		);
	} else if (player === "AI") {
		return (
			<BoardWrapper>
				<h2>
					{playersCtx.playerAI
						? playersCtx.playerAI.getName() + ": "
						: "Player: "}
					<span>
						{playersCtx.playerAI ? playersCtx.playerAI.getScore() : "0"}
					</span>
				</h2>
				<IndividualBoard>{boardDivsAI}</IndividualBoard>
				<footer className="emptyFooter" />
			</BoardWrapper>
		);
	}
}

export default Board;
