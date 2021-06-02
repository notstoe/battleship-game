import React, { useState } from "react";
import Board from "./Components/Board";
import PlayerModal from "./Components/PlayerModal";
import playerFactory from "./factories/playerFactory";
import { MainWrapper, Title, ContentWrapper, Image } from "./styles";

function App() {
	// const playerAI = playerFactory("AI");

	// const [player1, setPlayer1] = useState({
	// 	name: playerH.getName(),
	// 	score: playerH.getScore(),
	// });

	// const [player2, setPlayer2] = useState({
	// 	name: playerAI.getName(),
	// 	score: playerAI.getScore(),
	// });

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
		<MainWrapper>
			<Title>
				<Image title src="assets/battleshipTitle.png" alt="battleship" />
				<Image icon src="assets/battleship.svg" alt="battleship icon" />
			</Title>
			<ContentWrapper>
				<h1>Click on your board to place your ships!</h1>
				<div className="gameArea">
					{/* FIXME - fix board props */}
					<Board player={players[0]} />
					<Board player={players[1]} />
				</div>
			</ContentWrapper>

			{showModal && (
				<PlayerModal
					toggleModal={toggleModal}
					handleModalInputChange={handleModalInputChange}
					modalInput={modalInput}
					handleSubmit={handleSubmit}
				/>
			)}
		</MainWrapper>
	);
}

export default App;
