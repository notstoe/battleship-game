import React, { createContext, useEffect, useState } from "react";

import PlayerModal from "../Components/PlayerModal";

import { auth } from "../firebase";
import playerFactory from "../factories/playerFactory";

export const AuthRulesContext = createContext({});

export function AuthContextProvider({ children }) {
	const [playersCtx, setPlayersCtx] = useState({});
	const [currentUser, setCurrentUser] = useState({});

	const [loadingRequest, setLoadingRequest] = useState(false);
	const [loadingUser, setLoadingUser] = useState(true);

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

	function signup(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoadingUser(false);

			return unsubscribe;
		});
	}, []);

	async function handleSubmit(e, btnAction) {
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
					alert("Passwords do not match");
					return;
				}

				try {
					setLoadingRequest(true);
					await signup(emailInput, passwordInput);
				} catch {
					alert(
						"Failed to create an account, double check your inputs and try again"
					);
					return;
				}

				toggleModal();
				setShowPage(true);
				setLoadingRequest(false);

				const humanPlayer = playerFactory("Player");
				const playerAI = playerFactory("AI");

				const newPlayers = { humanPlayer, playerAI };
				setPlayersCtx(newPlayers);
				break;

			default:
				break;
		}
	}

	return (
		<AuthRulesContext.Provider
			value={{
				setEmailInput,
				setPasswordInput,
				setConfirmPasswordInput,
				handleSubmit,
				handleModalInputChange,
				toggleModal,
				currentUser,
				loadingRequest,
				showModal,
				showPage,
				emailInput,
				passwordInput,
				confirmPasswordInput,
				playersCtx,
			}}
		>
			{/* Don't render the app until the current user is set (loadingUser is false) */}
			{!loadingUser && children}
			{showModal && <PlayerModal />}
		</AuthRulesContext.Provider>
	);
}
