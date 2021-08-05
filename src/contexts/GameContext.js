import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import GameOverModal from "../Components/GameOverModal";
import gameBoard from "../factories/gameBoard";

import { AuthRulesContext } from "./AuthContext";

import Ship from "../factories/ship";

import { getRandomInt, getRandomXorY } from "../supportFunctions/getRandomInt";
import isEmpty from "../supportFunctions/isEmpty";

export const GameRulesContext = createContext({});

export function GameRulesProvider({ children }) {
	const { playersCtx, setPlayersCtx, saveScores, currentUser } = useContext(
		AuthRulesContext
	);

	const boardFunctionsHuman = useRef(gameBoard()); //useRef to prevent variable being re-defined everytime component re-renders
	const [stateBoardHuman, setStateBoardHuman] = useState(
		boardFunctionsHuman.current.getBoard()
	);

	const boardFunctionsAI = useRef(gameBoard());
	const [stateBoardAI, setStateBoardAI] = useState(
		boardFunctionsAI.current.getBoard()
	);

	const [shotAllowed, setShotAllowed] = useState(true);

	const [memoryAI, setMemoryAI] = useState({});

	const shipsHuman = useRef([Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)]);
	const shipsAI = useRef([Ship(1), Ship(2), Ship(3), Ship(4), Ship(5)]);

	const [shipsLeftAI, setShipsLeftAI] = useState(5);
	const [shipsLeftHuman, setShipsLeftHuman] = useState(5);

	const [isGameOver, setIsGameOver] = useState(false);
	const [roundWinner, setRoundWinner] = useState("");

	const [counter, setCounter] = useState(0);
	const [display, setDisplay] = useState("");

	const [orientation, setOrientation] = useState("x");

	function handleOrientationBtnClick() {
		orientation === "x" ? setOrientation("y") : setOrientation("x");
	}

	function resetGame() {
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
		setMemoryAI({});
	}

	function handleResetBtnClick() {
		if (shipsLeftHuman < 5) {
			alert("Can't reset after your ships have been sunk!");
			return;
		}

		resetGame();
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

			if (boardOwner !== "AI" || !shotAllowed) return;

			//HUMAN SHOT
			const shotInfoHuman = boardFunctionsAI.current.makeShot(
				rowIndex,
				colIndex
			);

			if (shotInfoHuman === null) return;
			setShotAllowed(false); //controlling against spamming shots

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

			// prevents last round from computer if Player wins
			if (isGameOver) return;

			let shotInfoAI;
			let coordsAIShot;
			let stopLoop = false;
			let counter = 0;

			setTimeout(() => setDisplay("Calculating next shot..."), 1200);
			setTimeout(() => {
				if ("hitWaterColPlus" in memoryAI && !memoryAI.hitWaterColPlus) {
					while (!stopLoop) {
						counter++;
						coordsAIShot = { row: memoryAI.row, col: memoryAI.col + counter };

						shotInfoAI = boardFunctionsHuman.current.makeShot(
							coordsAIShot.row,
							coordsAIShot.col
						);
						if (shotInfoAI || counter > 8) stopLoop = true;

						if (shotInfoAI === "water" || !shotInfoAI) {
							setMemoryAI({ ...memoryAI, hitWaterColPlus: true });
						}
					}
				}
				if ("hitWaterColMinus" in memoryAI && !memoryAI.hitWaterColMinus) {
					if (!shotInfoAI) {
						stopLoop = false;
						counter = 0;
						while (!stopLoop) {
							counter++;

							coordsAIShot = {
								row: memoryAI.row,
								col: memoryAI.col - counter,
							};
							shotInfoAI = boardFunctionsHuman.current.makeShot(
								coordsAIShot.row,
								coordsAIShot.col
							);

							if (shotInfoAI || counter > 8) stopLoop = true;

							if (shotInfoAI === "water" || !shotInfoAI) {
								setMemoryAI({ ...memoryAI, hitWaterColMinus: true });
							}
						}
					}
				}
				if ("hitWaterRowPlus" in memoryAI && !memoryAI.hitWaterRowPlus) {
					// if both col changes are invalid, try rows
					if (!shotInfoAI) {
						stopLoop = false;
						counter = 0;
						while (!stopLoop) {
							counter++;
							coordsAIShot = { row: memoryAI.row + counter, col: memoryAI.col };
							shotInfoAI = boardFunctionsHuman.current.makeShot(
								coordsAIShot.row,
								coordsAIShot.col
							);
							if (shotInfoAI || counter > 8) stopLoop = true;

							if (shotInfoAI === "water" || !shotInfoAI) {
								setMemoryAI({ ...memoryAI, hitWaterRowPlus: true });
							}
						}
					}
				}
				if ("hitWaterRowMinus" in memoryAI && !memoryAI.hitWaterRowMinus) {
					if (!shotInfoAI) {
						stopLoop = false;
						counter = 0;
						while (!stopLoop) {
							counter++;
							coordsAIShot = { row: memoryAI.row - counter, col: memoryAI.col };
							shotInfoAI = boardFunctionsHuman.current.makeShot(
								coordsAIShot.row,
								coordsAIShot.col
							);
							if (shotInfoAI || counter > 8) stopLoop = true;

							if (shotInfoAI === "water" || !shotInfoAI) {
								setMemoryAI({ ...memoryAI, hitWaterRowMinus: true });
							}
						}
					}
				}
				//tries to shoot if all tries are unsucessful, until return from MakeShot() is truthy
				while (!shotInfoAI) {
					coordsAIShot = { row: getRandomInt(0, 9), col: getRandomInt(0, 9) };

					shotInfoAI = boardFunctionsHuman.current.makeShot(
						coordsAIShot.row,
						coordsAIShot.col
					);

					if (shotInfoAI === "water") {
						setMemoryAI({});
					}
				}

				if (shotInfoAI === "water") {
					setDisplay("You dodged that one. Water!");
				} else {
					setDisplay("Ouch. That's a hit!");

					if (memoryAI.hitWaterRowPlus || memoryAI.hitWaterRowMinus) {
						if (memoryAI.hitWaterRowPlus && memoryAI.hitWaterColMinus) {
							setMemoryAI({});
						} else {
							let newMemory = { ...memoryAI };
							newMemory.row = coordsAIShot.row;
							newMemory.col = coordsAIShot.col;
							setMemoryAI(newMemory);
						}
					} else if (memoryAI.hitWaterColPlus || memoryAI.hitWaterColMinus) {
						if (memoryAI.hitWaterColPlus && memoryAI.hitWaterRowMinus) {
							setMemoryAI({});
						} else {
							let newMemory = { ...memoryAI };
							newMemory.row = coordsAIShot.row;
							newMemory.col = coordsAIShot.col;
							setMemoryAI(newMemory);
						}
					} else {
						setMemoryAI({
							row: coordsAIShot.row,
							col: coordsAIShot.col,
							hitWaterRowPlus: false,
							hitWaterRowMinus: false,
							hitWaterColPlus: false,
							hitWaterColMinus: false,
						});
					}

					//shotInfo return looks like this -> {shipLength, isHit, blockHit}
					const dmgedShipHuman = shipsHuman.current[
						shotInfoAI.shipLength - 1
					].takeHit(shotInfoAI.blockHit);

					if (dmgedShipHuman.isSunk)
						setShipsLeftHuman((prevState) => prevState - 1);
				}

				setStateBoardHuman(boardFunctionsHuman.current.getBoard());
				setShotAllowed(true);
			}, 2200);
		}
	}

	/* eslint-disable */

	useEffect(() => {
		if (shipsLeftAI === 0) {
			setIsGameOver(true);
			setRoundWinner("You");

			const newPlayersState = { ...playersCtx };
			newPlayersState.humanPlayer.incrementScore();

			setPlayersCtx(newPlayersState);
			if (!isEmpty(currentUser)) saveScores();
		} else if (shipsLeftHuman === 0) {
			setIsGameOver(true);
			setRoundWinner(playersCtx.playerAI.getName());

			const newPlayersState = { ...playersCtx };
			newPlayersState.playerAI.incrementScore();

			setPlayersCtx(newPlayersState);
			if (!isEmpty(currentUser)) saveScores();
		}
	}, [shipsLeftAI, shipsLeftHuman]);

	/* eslint-enable */

	return (
		<GameRulesContext.Provider
			value={{
				handleOrientationBtnClick,
				handleResetBtnClick,
				handleBoardClick,
				resetGame,
				stateBoardHuman,
				stateBoardAI,
				counter,
				display,
				roundWinner,
			}}
		>
			{children}
			{isGameOver && <GameOverModal />}
		</GameRulesContext.Provider>
	);
}
