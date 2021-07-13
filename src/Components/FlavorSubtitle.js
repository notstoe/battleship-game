import React, { useContext } from "react";
import { GameRulesContext } from "../contexts/GameContext";

import styled from "styled-components";

const FlavorTxt = styled.h1`
	font-family: Special Elite, sans-serif;
	font-size: 1.6rem;
	text-align: center;

	color: var(--highlight-yellow);
	margin: 2rem 0;
	padding-top: 1rem;
	min-height: 3.9rem;
	line-height: 2.3rem;
`;

export default function FlavorSubtitle() {
	const { counter, display } = useContext(GameRulesContext);

	let displayTxt;

	if (display.length > 0) {
		displayTxt = display;
	} else {
		if (counter < 5) {
			displayTxt = "Click on your board to place your ships!";
		} else {
			displayTxt = "Good luck! Click on the AI board to take your shot!";
		}
	}

	return <FlavorTxt>{displayTxt}</FlavorTxt>;
}
