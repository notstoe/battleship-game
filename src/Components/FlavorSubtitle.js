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
	const { counter } = useContext(GameRulesContext);

	return (
		<FlavorTxt>
			{counter < 5
				? "Click on your board to place your ships!"
				: "Good luck! Take your shot!"}
		</FlavorTxt>
	);
}
