import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import styled from "styled-components";
import { motion } from "framer-motion";

const Overlay = styled(motion.div)`
	background: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: Special Elite, sans-serif;
	font-size: 1.4rem;
	color: var(--highlight-yellow);

	form {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		background: var(--bg-blue);

		width: 90%;
		height: 32rem;
		max-width: 480px;
		padding: 1.8rem 1rem;

		border: 2px solid var(--highlight-yellow);
		box-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);
		border-radius: 72px;

		text-align: center;
	}

	label {
		font-size: 1.5rem;
	}

	input {
		width: 83%;
		max-width: 430px;

		height: 70%;
		max-height: 2.5rem;

		padding: 0 0.6rem;
		border-radius: 5px;

		font-size: 1.2rem;

		background: var(--fullwhite);
	}
`;

const AuthBtnsContainer = styled.div`
	display: grid;
	justify-content: center;
	grid-template: 1fr 1fr / 1fr 1fr;
	column-gap: 1.8rem;
	max-width: 100%;

	.guestBtn {
		grid-row: 2;
		grid-column: 1 / 3;
	}

	@media (max-width: 420px) {
		column-gap: 0.2rem;
	}

	button {
		margin-top: 1.7rem;
		padding: 1.5rem 3.6rem;
		border-radius: 38px;
		border: 1px solid var(--highlight-yellow);

		background: var(--bg-blue);
		color: var(--highlight-yellow);
		box-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);

		font-family: Special Elite, sans-serif;
		font-size: 1.1rem;
		line-height: 0;

		transition: all 150ms;

		:hover {
			box-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.3);
		}

		:active {
			/* box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.4); */
			border: 1px inset var(--highlight-yellow);
			transform: scale(0.97);
		}

		@media (max-width: 420px) {
			font-size: 1.1rem;
			padding: 1.5rem 2rem;
		}
	}
`;

export default function PlayerModal() {
	const {
		handleModalInputChange,
		emailInput,
		passwordInput,
		confirmPasswordInput,
		handleSubmit,
	} = useContext(AuthContext);

	const overlayVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.2 } },
	};

	const modalVariants = {
		hidden: { opacity: 0, scale: 0.6 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.15, delay: 0.1 },
		},
	};

	return (
		<Overlay variants={overlayVariants} initial="hidden" animate="visible">
			<motion.form variants={modalVariants}>
				<label htmlFor="email">Email:</label>
				<input
					name="email"
					type="text"
					value={emailInput}
					onChange={(event) => handleModalInputChange(event, "email")}
				/>
				<label htmlFor="password">Password:</label>
				<input
					name="password"
					type="text"
					value={passwordInput}
					onChange={(event) => handleModalInputChange(event, "password")}
				/>
				<label htmlFor="confirmPassword">Confirm Password:</label>
				<input
					name="confirmPassword"
					type="text"
					value={confirmPasswordInput}
					onChange={(event) => handleModalInputChange(event, "confirmPassword")}
				/>
				<AuthBtnsContainer>
					{/* TODO - fix these buttons and submit function */}
					<button type="submit" onClick={handleSubmit}>
						Log-in
					</button>
					<button
						type="button"
						onClick={(event) => handleSubmit(event, "register")}
					>
						Register
					</button>
					<button className="guestBtn" type="button" onClick={handleSubmit}>
						Play as Guest
					</button>
				</AuthBtnsContainer>
			</motion.form>
		</Overlay>
	);
}
