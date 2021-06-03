import React, { createContext, useState } from "react";
import PlayerModal from "../Components/PlayerModal";

import playerFactory from "../factories/playerFactory";

export const GameRulesContext = createContext({});

export function GameRulesProvider({ children }) {
	const [playersCtx, setPlayersCtx] = useState({});

	const [showModal, setShowModal] = useState(true);
	const [modalInput, setModalInput] = useState("");

	function toggleModal() {
		setShowModal(!showModal);
	}

	function handleModalInputChange(e) {
		setModalInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setShowModal(!showModal);

		const human = playerFactory(modalInput);
		const playerAI = playerFactory("AI");

		const newPlayers = { human, playerAI };
		setPlayersCtx(newPlayers);
	}

	return (
		<GameRulesContext.Provider
			value={{
				toggleModal,
				handleModalInputChange,
				handleSubmit,
				playersCtx,
				modalInput,
			}}
		>
			{children}
			{showModal && <PlayerModal />}
		</GameRulesContext.Provider>
	);
}
