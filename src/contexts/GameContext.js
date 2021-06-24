import React, { createContext, useRef, useState } from "react";
import PlayerModal from "../Components/PlayerModal";
import gameBoard from "../factories/gameBoard";

import playerFactory from "../factories/playerFactory";
import Ship from "../factories/ship";

export const GameRulesContext = createContext({});

export function GameRulesProvider({ children }) {
	const [playersCtx, setPlayersCtx] = useState({});

	const [showModal, setShowModal] = useState(true);
	const [modalInput, setModalInput] = useState("");

	const boardFunctionsHuman = useRef(gameBoard()); //useRef prevents variable being re-defined everytime component re-renders
	const [stateBoardHuman, setStateBoardHuman] = useState(
		boardFunctionsHuman.current.getBoard()
	);

	const boardFunctionsAI = useRef(gameBoard());
	const [stateBoardAI, setStateBoardAI] = useState(
		boardFunctionsAI.current.getBoard()
	);

	//TODO - change it into an array or obj with all ships from a player
	const shipsCreated = Ship(2);

	function toggleModal() {
		setShowModal(!showModal);
	}

	function handleModalInputChange(e) {
		setModalInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setShowModal(!showModal);

		let human;

		if (modalInput.length === 0) {
			human = playerFactory("Anonymous");
		} else {
			human = playerFactory(modalInput);
		}

		const playerAI = playerFactory("AI");

		const newPlayers = { human, playerAI };
		setPlayersCtx(newPlayers);
	}

	function handleBoardClick(e) {
		const boardOwner = e.target.parentNode.parentNode.parentNode.firstChild.firstChild.textContent.slice(
			0,
			-2
		);

		if (boardOwner === "AI") return;

		const rowIndex = Number(e.target.parentNode.attributes[0].textContent);
		const colIndex = Number(e.target.attributes[0].textContent);

		boardFunctionsHuman.current.addShip(
			rowIndex,
			colIndex,
			"x",
			shipsCreated.shipBlocks
		);

		setStateBoardHuman(boardFunctionsHuman.current.getBoard());
	}

	return (
		<GameRulesContext.Provider
			value={{
				toggleModal,
				handleModalInputChange,
				handleSubmit,
				handleBoardClick,
				playersCtx,
				modalInput,
				stateBoardHuman,
				stateBoardAI,
			}}
		>
			{children}
			{showModal && <PlayerModal />}
		</GameRulesContext.Provider>
	);
}
