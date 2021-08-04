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

	const [hasAccount, setHasAccount] = useState(false);
	const [passwordReset, setPasswordReset] = useState(false);

	function toggleModal() {
		setShowModal(!showModal);
	}

	function toggleLogin() {
		setHasAccount(!hasAccount);
	}

	function togglePasswordReset() {
		setPasswordReset(!passwordReset);
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

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoadingUser(false);

			// on componentDidMount it adds the listener authStateChanged which saves the current user into state...
			// on componentWillUnmount it removes the listener (return from the function, shutsdown the listener)

			return unsubscribe;
		});
	}, []);

	async function handleSubmit(e, btnAction) {
		e.preventDefault();
		let humanPlayer;
		let playerAI;
		let newPlayers;

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
						"Failed to create an account, email invalid or already in use... Try again"
					);
					setLoadingRequest(false);
					return;
				}

				toggleModal();
				setShowPage(true);
				setLoadingRequest(false);

				humanPlayer = playerFactory("Player");
				playerAI = playerFactory("AI");

				newPlayers = { humanPlayer, playerAI };
				setPlayersCtx(newPlayers);
				break;

			case "login":
				try {
					setLoadingRequest(true);
					await login(emailInput, passwordInput);
				} catch {
					alert("Failed to sign in... Try again");
					setLoadingRequest(false);
					return;
				}

				toggleModal();
				setShowPage(true);
				setLoadingRequest(false);

				humanPlayer = playerFactory("Player");
				playerAI = playerFactory("AI");

				newPlayers = { humanPlayer, playerAI };
				setPlayersCtx(newPlayers);
				break;

			case "anonymous":
				toggleModal();
				setShowPage(true);
				setCurrentUser({});

				humanPlayer = playerFactory("Player");
				playerAI = playerFactory("AI");

				newPlayers = { humanPlayer, playerAI };
				setPlayersCtx(newPlayers);
				break;

			case "resetPassword":
				try {
					setLoadingRequest(true);
					await resetPassword(emailInput);
					alert("Check your inbox for further instructions");
				} catch {
					alert("Failed to send reset password email... Try again");
				}

				setLoadingRequest(false);
				break;

			default:
				console.alert("Something went wrong. Refresh the page!");
				break;
		}
	}

	async function handleLogout(player) {
		if (player !== "anonymous") {
			try {
				await logout();
			} catch {
				alert("Failed to log out... Try again");
				return false;
			}
		}

		setShowPage(false);
		toggleModal();
		setCurrentUser({});
		setPlayersCtx({});

		return true;
	}
	return (
		<AuthRulesContext.Provider
			value={{
				setEmailInput,
				setPasswordInput,
				setConfirmPasswordInput,
				togglePasswordReset,
				handleSubmit,
				handleModalInputChange,
				handleLogout,
				toggleModal,
				toggleLogin,
				passwordReset,
				hasAccount,
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
