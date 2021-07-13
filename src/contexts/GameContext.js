import React, { createContext, useEffect, useRef, useState } from "react";
import PlayerModal from "../Components/PlayerModal";
import GameOverModal from "../Components/GameOverModal";
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

	const [shotAllowed, setShotAllowed] = useState(true);

	//TODO - save last coords if it was a hit
	// const [memoryAI, setMemoryAI] = useState(null);

	const shipsHuman = useRef([Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)]);
	const shipsAI = useRef([Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)]);

	// TODO - end game when all ships from one player sunk
	const [shipsLeftAI, setShipsLeftAI] = useState(5);
	const [shipsLeftHuman, setShipsLeftHuman] = useState(5);

	const [isGameOver, setIsGameOver] = useState(false);
	const [roundWinner, setRoundWinner] = useState("");

	const [counter, setCounter] = useState(0);
	const [display, setDisplay] = useState("");

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

	function handleResetBtnClick() {
		boardFunctionsHuman.current = gameBoard();
		setStateBoardHuman(boardFunctionsHuman.current.getBoard());

		boardFunctionsAI.current = gameBoard();
		setStateBoardAI(boardFunctionsAI.current.getBoard());

		shipsHuman.current = [Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)];
		shipsAI.current = [Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)];

		setCounter(0);
		setDisplay("");
		setShotAllowed(true);
		setShipsLeftAI(5);
		setShipsLeftHuman(5);
		setIsGameOver(false);
		setRoundWinner("");
	}

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
			//TAKING SHOTS, GAME START

			if (boardOwner !== "AI") return;
			if (!shotAllowed) return;
			setShotAllowed(false); //controlling against spamming shots

			//HUMAN SHOT
			const shotInfoHuman = boardFunctionsAI.current.makeShot(
				rowIndex,
				colIndex
			);

			if (shotInfoHuman === null) return;

			if (shotInfoHuman === "water") {
				setDisplay("Water! Your aim was off on that one.");
			} else {
				setDisplay("That's a direct hit. Good job!");

				//shotInfo looks like this {shipLength, isHit, blockHit}
				const dmgedShipAI = shipsAI.current[
					shotInfoHuman.shipLength - 1
				].takeHit(shotInfoHuman.blockHit);

				if (dmgedShipAI.isSunk) setShipsLeftAI((prevState) => prevState - 1);
			}

			setStateBoardAI(boardFunctionsAI.current.getBoard());

			//AI SHOT

			setTimeout(() => setDisplay("Calculating next shot..."), 2200);
			setTimeout(() => {
				let shotInfoAI = boardFunctionsHuman.current.makeShot(
					getRandomInt(0, 9),
					getRandomInt(0, 9)
				);

				while (!shotInfoAI)
					shotInfoAI = boardFunctionsHuman.current.makeShot(
						getRandomInt(0, 9),
						getRandomInt(0, 9)
					);

				if (shotInfoAI === "water") {
					setDisplay("You dodged that one. Water!");
				} else {
					setDisplay("Ouch. That's a hit!");

					//shotInfo looks like this {shipLength, isHit, blockHit}
					const dmgedShipHuman = shipsHuman.current[
						shotInfoAI.shipLength - 1
					].takeHit(shotInfoAI.blockHit);

					if (dmgedShipHuman.isSunk)
						setShipsLeftHuman((prevState) => prevState - 1);
				}

				setStateBoardHuman(boardFunctionsHuman.current.getBoard());
				setShotAllowed(true);
			}, 3500);
		}
	}

	useEffect(() => {
		if (shipsLeftAI === 0) {
			setIsGameOver(true);
			setRoundWinner(playersCtx.human.getName());

			let newPlayersState = { ...playersCtx };
			newPlayersState.human.incrementScore();

			setPlayersCtx(newPlayersState);
		}
		if (shipsLeftHuman === 0) {
			setIsGameOver(true);
			setRoundWinner(playersCtx.playerAI.getName());

			let newPlayersState = { ...playersCtx };
			newPlayersState.playerAI.incrementScore();

			setPlayersCtx(newPlayersState);
		}
	}, [shipsLeftAI, shipsLeftHuman]);

	return (
		<GameRulesContext.Provider
			value={{
				toggleModal,
				handleModalInputChange,
				handleSubmit,
				handleOrientationBtnClick,
				handleChangeNameBtnClick,
				handleResetBtnClick,
				handleBoardClick,
				playersCtx,
				modalInput,
				stateBoardHuman,
				stateBoardAI,
				counter,
				display,
				roundWinner,
			}}
		>
			{children}
			{showModal && <PlayerModal />}
			{isGameOver && <GameOverModal />}
		</GameRulesContext.Provider>
	);
}
