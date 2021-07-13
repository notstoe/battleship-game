import React, { useContext } from "react";
import { GameRulesContext } from "../contexts/GameContext";

import styled from "styled-components";

const FlavorTxt = styled.h1`
	font-family: Special Elite, sans-serif;
	font-size: 1.6rem;
	text-align: center;

	color: var(--highlight-yellow);
	margin: 2.3rem 0;
`;

export default function FlavorSubtitle() {
	const { counter, infoGame } = useContext(GameRulesContext);

	let display;

	if (infoGame.length > 0) {
		display = infoGame;
	} else {
		if (counter < 5) {
			display = "Click on your board to place your ships!";
		} else {
			display = "Good luck! Click on the AI board to take your shot!";
		}
	}

	return <FlavorTxt>{display}</FlavorTxt>;
}
