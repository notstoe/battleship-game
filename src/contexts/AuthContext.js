import React, { createContext, useState } from "react";

import PlayerModal from "../Components/PlayerModal";

// import { auth } from "../firebase";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
	const [playersCtx, setPlayersCtx] = useState({});

	const [showModal, setShowModal] = useState(true);
	const [showPage, setShowPage] = useState(false);

	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

	function toggleModal() {
		setShowModal(!showModal);
	}

	function handleModalInputChange(event, inputName) {
		if (inputName === "email") setEmailInput(event.target.value);
		if (inputName === "password") setPasswordInput(event.target.value);
		if (inputName === "confirmPassword")
			setConfirmPasswordInput(event.target.value);
	}

	// function signup(email, password) {
	// 	auth.createUserWithEmailAndPassword();
	// }

	function handleSubmit(e, btnAction) {
		e.preventDefault();
		switch (btnAction) {
			case "register":
				if (emailInput.search("@") < 0) {
					alert("Please, use a valid email");
					return;
				}
				if (passwordInput.length < 6) {
					alert("Password must contain a minimum of 6 digits");
					return;
				}
				if (passwordInput !== confirmPasswordInput) {
					alert("Passwords don't match!");
					return;
				}
				toggleModal();
				setShowPage(true);
				break;

			default:
				break;
		}
		// if (isEmpty(playersCtx)) {
		// 	// TODO - fix submit function
		// 	//first Modal, creates new players
		// 	let human;
		// 	if (modalInput.length === 0) {
		// 		human = playerFactory("Anonymous");
		// 	} else {
		// 		human = playerFactory(modalInput);
		// 	}
		// 	const playerAI = playerFactory("AI");
		// 	const newPlayers = { human, playerAI };
		// 	setPlayersCtx(newPlayers);
		// } else {
		// 	//changing name on modal
		// 	let newPlayersCtx = { ...playersCtx };
		// 	newPlayersCtx.human.setName(
		// 		modalInput.length === 0 ? "Anonymous" : modalInput
		// 	);
		// 	setPlayersCtx(newPlayersCtx);
		// }
	}

	return (
		<AuthContext.Provider
			value={{
				setEmailInput,
				setPasswordInput,
				setConfirmPasswordInput,
				setPlayersCtx,
				handleSubmit,
				handleModalInputChange,
				toggleModal,
				showModal,
				showPage,
				emailInput,
				passwordInput,
				confirmPasswordInput,
				playersCtx,
			}}
		>
			{children}
			{showModal && <PlayerModal />}
		</AuthContext.Provider>
	);
}
