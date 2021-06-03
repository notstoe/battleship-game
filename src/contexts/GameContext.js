import React, { createContext, useState } from "react";
import PlayerModal from "../Components/PlayerModal";

import playerFactory from "../factories/playerFactory";

export const GameRulesContext = createContext({});

export function GameRulesProvider({ children }) {
	const [players, setPlayers] = useState([]);

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

		const newPlayers = [human, playerAI];
		setPlayers(newPlayers);
	}

	return (
		<GameRulesContext.Provider
			value={{
				toggleModal,
				handleModalInputChange,
				handleSubmit,
				players,
				modalInput,
			}}
		>
			{children}
			{showModal && <PlayerModal />}
		</GameRulesContext.Provider>
	);
}
