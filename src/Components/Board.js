import React, { useContext } from 'react';

import { GameRulesContext } from '../contexts/GameContext';
import { AuthRulesContext } from '../contexts/AuthContext';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

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

		.rotateBtn,
		.leaderboardsBtn {
			margin: 1rem auto 0 auto;
		}
	}

	button {
		position: relative;

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
			transform: scale(0.98);
		}
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

		/* not allowing text selection inside the board */
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
	}
`;

const DirectionIndicator = styled.div`
	position: absolute;
	right: -75px;
	top: 50%;

	width: 36px;
	height: 8px;

	border: 1px solid var(--highlight-yellow);

	pointer-events: none;

	transition: transform 0.2s ease;

	${({ orientation }) => {
		if (orientation === 'x') {
			return css`
				transform: translateY(-50%);
			`;
		} else {
			return css`
				transform: translateY(-50%) rotate(90deg);
			`;
		}
	}}
`;

const ShipLenghtDisplay = styled.div`
	position: absolute;
	left: -70px;
	top: 50%;
	transform: translateY(-50%);

	width: 2rem;
	height: 2rem;

	border: 1px var(--highlight-yellow) solid;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: transform 0.7s cubic-bezier(0.32, -0.15, 0.47, 1.31);

	pointer-events: none;

	${({ orientation }) => {
		if (orientation === 'x') {
			return css`
				transform: translateY(-50%);
			`;
		} else {
			return css`
				transform: translateY(-50%) rotate(360deg);
			`;
		}
	}}

	&::after {
		content: '${({ counter }) => counter + 1}';

		transform: translateY(25%);
	}
`;

function Board({ player }) {
	const {
		stateBoardHuman,
		stateBoardAI,
		handleBoardClick,
		handleOrientationBtnClick,
		handleResetBtnClick,
		resetGame,
		counter,
		orientation,
	} = useContext(GameRulesContext);

	const { emailInput, handleLogout, playersCtx, loadLeaderboards } = useContext(
		AuthRulesContext
	);

	const btnVariants = {
		hidden: { x: '-30vh', opacity: 0 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', duration: 1, delay: 2 },
		},
		exit: { opacity: 0, transition: { duration: 0.5 } },
	};

	const btnLeaderboardsVariants = {
		hidden: { x: '30vh', opacity: 0 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', duration: 1, delay: 2 },
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
			<div key={rowIndex} row={rowIndex} className='row'>
				{row.map((col, colIndex) => {
					return (
						<div
							key={colIndex}
							col={colIndex}
							className='col'
							shipblock={
								col.shipBlock ? JSON.stringify(col.shipBlock) : undefined
							}
							style={
								col.wasShot
									? col.shipBlock
										? { backgroundColor: '#183f57', color: '#ffc678' }
										: { backgroundColor: '#6baad1' }
									: col.shipBlock
									? { backgroundColor: '#183f57' }
									: { backgroundColor: '#ffc678' }
							}
							onClick={(e) => {
								handleBoardClick('human', rowIndex, colIndex);
							}}
						>
							{col.wasShot && 'X'}
						</div>
					);
				})}
			</div>
		);
	});

	const boardDivsAI = stateBoardAI.map((row, rowIndex) => {
		return (
			<div key={rowIndex} row={rowIndex} className='row'>
				{row.map((col, colIndex) => {
					return (
						<div
							key={colIndex}
							col={colIndex}
							className='col'
							shipblock={
								col.shipBlock ? JSON.stringify(col.shipBlock) : undefined
							}
							style={
								col.wasShot
									? col.shipBlock
										? { backgroundColor: '#183f57', color: '#ffc678' }
										: { backgroundColor: '#6baad1' }
									: { backgroundColor: '#ffc678' }
							}
							onClick={() => {
								handleBoardClick('AI', rowIndex, colIndex);
							}}
						>
							{col.wasShot && 'X'}
						</div>
					);
				})}
			</div>
		);
	});

	let nickname;

	if (emailInput.length > 0) {
		nickname = emailInput.slice(0, emailInput.indexOf('@'));
	} else {
		nickname = 'Anonymous';
	}

	if (player === 'human') {
		return (
			<BoardWrapper>
				<h2>
					{nickname + ': '}
					<span>
						{playersCtx.humanPlayer && playersCtx.humanPlayer.getScore()}
					</span>
				</h2>
				<IndividualBoard>{boardDivsHuman}</IndividualBoard>
				<motion.footer
					variants={btnVariants}
					initial='hidden'
					animate='visible'
					exit='exit'
				>
					{counter < 5 ? (
						<button className='rotateBtn' onClick={handleOrientationBtnClick}>
							rotate
							<ShipLenghtDisplay orientation={orientation} counter={counter} />
							<DirectionIndicator orientation={orientation} />
						</button>
					) : (
						<>
							<motion.button
								variants={btnsInGameVariants}
								initial='hidden'
								animate='visible'
								// if logout was sucessful, reset all game parameters
								onClick={() => {
									handleLogout('anonymous') && resetGame();
								}}
							>
								Log-Out
							</motion.button>
							<motion.button
								variants={btnsInGameVariants}
								initial='hidden'
								animate='visible'
								onClick={handleResetBtnClick}
							>
								Reset
							</motion.button>
						</>
					)}
				</motion.footer>
			</BoardWrapper>
		);
	} else if (player === 'AI') {
		return (
			<BoardWrapper>
				<h2>
					{'AI: '}
					<span>{playersCtx.playerAI && playersCtx.playerAI.getScore()}</span>
				</h2>
				<IndividualBoard>{boardDivsAI}</IndividualBoard>
				<motion.footer
					variants={btnLeaderboardsVariants}
					initial='hidden'
					animate='visible'
					exit='exit'
				>
					<button className='leaderboardsBtn' onClick={loadLeaderboards}>
						Leaderboards
					</button>
				</motion.footer>
			</BoardWrapper>
		);
	}
}

export default Board;
