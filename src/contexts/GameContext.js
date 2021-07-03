import React, { createContext, useRef, useState } from "react";
import PlayerModal from "../Components/PlayerModal";
import gameBoard from "../factories/gameBoard";

import playerFactory from "../factories/playerFactory";
import Ship from "../factories/ship";

import isEmpty from "../supportFunctions/isEmpty";
import { getRandomInt, getRandomXorY } from "../supportFunctions/getRandomInt";

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

	const shipsHuman = useRef([Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)]);
	const shipsAI = useRef([Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)]);

	const [counter, setCounter] = useState(0);

	const [orientation, setOrientation] = useState("x");

	function toggleModal() {
		setShowModal(!showModal);
	}

	function handleModalInputChange(e) {
		setModalInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setShowModal(!showModal);

		if (isEmpty(playersCtx)) {
			//first Modal, creates new players
			let human;

			if (modalInput.length === 0) {
				human = playerFactory("Anonymous");
			} else {
				human = playerFactory(modalInput);
			}

			const playerAI = playerFactory("AI");

			const newPlayers = { human, playerAI };
			setPlayersCtx(newPlayers);
		} else {
			//changing name on modal
			let newPlayersCtx = { ...playersCtx };

			newPlayersCtx.human.setName(
				modalInput.length === 0 ? "Anonymous" : modalInput
			);

			setPlayersCtx(newPlayersCtx);
		}
	}

	function handleOrientationBtnClick() {
		orientation === "x" ? setOrientation("y") : setOrientation("x");
	}

	function handleChangeNameBtnClick() {
		toggleModal();
	}

	//TODO - reset button functionality

	function handleBoardClick(boardOwner, rowIndex, colIndex) {
		//SHIPS PLACEMENT
		if (counter < 5) {
			if (boardOwner === "AI") return;

			const addShipReturn = boardFunctionsHuman.current.addShip(
				rowIndex,
				colIndex,
				orientation,
				shipsHuman.current[counter].shipBlocks
			);

			if (!addShipReturn) {
				alert("Oops! Can't place your ship there");
				return;
			}

			let addShipAIReturn = boardFunctionsAI.current.addShip(
				getRandomInt(0, 9),
				getRandomInt(0, 9),
				getRandomXorY(),
				shipsAI.current[counter].shipBlocks
			);

			//keeps trying to add ship until return is truthy (adding off the grid or on top of another ship)
			while (!addShipAIReturn) {
				addShipAIReturn = boardFunctionsAI.current.addShip(
					getRandomInt(0, 9),
					getRandomInt(0, 9),
					getRandomXorY(),
					shipsAI.current[counter].shipBlocks
				);
			}

			setStateBoardHuman(boardFunctionsHuman.current.getBoard());
			setStateBoardAI(boardFunctionsAI.current.getBoard());
			setCounter((prevState) => prevState + 1);
		} else {
			//TODO - TAKING SHOTS, GAME START
			if (boardOwner !== "AI") return;
			console.log([colIndex, rowIndex, "taking shots"]);
		}
	}

	return (
		<GameRulesContext.Provider
			value={{
				toggleModal,
				handleModalInputChange,
				handleSubmit,
				handleOrientationBtnClick,
				handleChangeNameBtnClick,
				handleBoardClick,
				playersCtx,
				modalInput,
				stateBoardHuman,
				stateBoardAI,
				counter,
			}}
		>
			{children}
			{showModal && <PlayerModal />}
		</GameRulesContext.Provider>
	);
}
