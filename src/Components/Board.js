import React, { useState } from "react";

import styled from "styled-components";

import gameBoard from "../factories/gameBoard";

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
	}

	.emptyFooter {
		padding-bottom: 3.8rem;
	}
`;

const IndividualBoard = styled.div`
	background-color: var(--highlight-yellow);

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
	}
`;

function Board({ player }) {
	const boardFunctions = gameBoard();

	const [stateBoard, setStateBoard] = useState(boardFunctions.getBoard());

	const boardBlocks = stateBoard.map((row, rowIndex) => {
		return (
			<div key={rowIndex} className="row">
				{row.map((col, colIndex) => {
					return (
						<div
							key={colIndex}
							className="col"
							shipblock={
								col.shipBlock ? JSON.stringify(col.shipBlock) : undefined
							}
							shot={col.wasShot.toString()}
						></div>
					);
				})}
			</div>
		);
	});

	return (
		<BoardWrapper>
			<h2>
				{player ? player.getName() + ": " : "Player: "}
				<span>{player ? player.getScore() : "0"}</span>
			</h2>

			<IndividualBoard>{boardBlocks}</IndividualBoard>
			{player ? (
				player.getName() !== "AI" ? (
					<footer>
						<button>rotate</button>
					</footer>
				) : (
					<footer className="emptyFooter" />
				)
			) : (
				<footer className="emptyFooter" />
			)}
		</BoardWrapper>
	);
}

export default Board;
