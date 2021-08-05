import React, { createContext, useEffect, useState } from "react";

import PlayerModal from "../Components/PlayerModal";
import LeaderboardsModal from "../Components/LeaderboardsModal";

import { auth, db } from "../firebase";

import playerFactory from "../factories/playerFactory";

export const AuthRulesContext = createContext({});

export function AuthContextProvider({ children }) {
	const [playersCtx, setPlayersCtx] = useState({});
	const [currentUser, setCurrentUser] = useState({});

	const [loadingRequest, setLoadingRequest] = useState(false);
	const [loadingUser, setLoadingUser] = useState(true);

	const [showModal, setShowModal] = useState(true);
	const [showPage, setShowPage] = useState(false);
	const [showLeaderboards, setShowLeaderboards] = useState(false);

	const [savedDocs, setSavedDocs] = useState([]);

	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

	const [hasAccount, setHasAccount] = useState(false);
	const [passwordReset, setPasswordReset] = useState(false);

	function toggleModal() {
		setShowModal(!showModal);
	}

	function readFromDb(nameCollection, specificId) {
		if (!specificId) {
			return db.collection(nameCollection).orderBy("score", "desc").get();
		} else {
			return db.collection(nameCollection).doc(specificId).get();
		}
	}

	function writeToDb(uemail, obj) {
		return db.collection("leaderboards").doc(uemail).set(obj);
	}

	async function saveScores() {
		const nickname = emailInput.slice(0, emailInput.indexOf("@"));

		try {
			await writeToDb(emailInput, {
				nickname: nickname,
				email: emailInput,
				score: playersCtx.humanPlayer.getScore(),
				scoreAI: playersCtx.playerAI.getScore(),
			});
		} catch (error) {
			console.warn("Failed to save results...", error.message);
		}
	}

	async function getPreviousScores(uemail) {
		try {
			const userDoc = await readFromDb("leaderboards", uemail);
			return { score: userDoc.data().score, scoreAI: userDoc.data().scoreAI };
		} catch {
			console.warn("(1) Failed to retrieve previous scores");
			return { score: 0, scoreAI: 0 };
		}
	}

	function toggleLeaderboards() {
		setShowLeaderboards(!showLeaderboards);
	}

	async function loadLeaderboards() {
		toggleLeaderboards();

		let newState = [];

		try {
			const snapshot = await readFromDb("leaderboards");
			snapshot.docs.forEach((doc) => {
				newState.push(doc);
			});
			setSavedDocs(newState);
		} catch {
			console.warn("Leaderboards failed to load");
			return;
		}
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
		let humanPlayer, playerAI;
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
				} catch (error) {
					alert(error.message);
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

				createUserDoc(emailInput, emailInput);

				break;

			case "login":
				try {
					setLoadingRequest(true);
					await login(emailInput, passwordInput);
				} catch (error) {
					alert(error.message);
					setLoadingRequest(false);
					return;
				}

				toggleModal();
				setShowPage(true);
				setLoadingRequest(false);

				humanPlayer = playerFactory("Player");
				playerAI = playerFactory("AI");

				newPlayers = { humanPlayer, playerAI };

				try {
					const objResponse = await getPreviousScores(emailInput);
					humanPlayer.setScore(objResponse.score);
					playerAI.setScore(objResponse.scoreAI);
					setPlayersCtx(newPlayers);
				} catch {
					console.warn("(2) Failed to retrieve scores");
				}

				break;

			case "anonymous":
				toggleModal();
				setShowPage(true);
				setCurrentUser({});
				setEmailInput("");

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
					alert("Failed to send email");
				}

				setLoadingRequest(false);
				break;

			default:
				console.warn("Something went wrong. Refresh the page!");
				break;
		}
	}

	async function createUserDoc(userid, email) {
		const nickname = email.slice(0, email.indexOf("@"));

		try {
			await writeToDb(userid, {
				nickname: nickname,
				email: email,
				score: 0,
				scoreAI: 0,
			});
		} catch {
			console.warn("Failed to add reference to database");
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
				emailInput,
				setEmailInput,
				passwordInput,
				setPasswordInput,
				confirmPasswordInput,
				setConfirmPasswordInput,
				passwordReset,
				togglePasswordReset,
				showModal,
				toggleModal,
				hasAccount,
				toggleLogin,
				playersCtx,
				setPlayersCtx,
				showPage,
				currentUser,
				loadingRequest,
				handleSubmit,
				handleModalInputChange,
				handleLogout,
				toggleLeaderboards,
				loadLeaderboards,
				saveScores,
				savedDocs,
			}}
		>
			{/* Don't render the app until the current user is set (loadingUser is false) */}
			{!loadingUser && children}
			{showModal && <PlayerModal />}
			{showLeaderboards && <LeaderboardsModal />}
		</AuthRulesContext.Provider>
	);
}
