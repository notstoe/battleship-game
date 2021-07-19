import React, { useContext } from "react";
import { GameRulesContext } from "../contexts/GameContext";

import styled from "styled-components";
import { motion } from "framer-motion";

const FlavorTxt = styled(motion.h1)`
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

	const flavorTxtVariants = {
		hidden: { y: "-20vh", scale: 0.5, opacity: 0 },
		visible: {
			y: 0,
			scale: 1,
			opacity: 1,
			transition: { type: "spring", delay: 1, duration: 0.6 },
		},
	};

	return (
		<FlavorTxt variants={flavorTxtVariants} initial="hidden" animate="visible">
			{displayTxt}
		</FlavorTxt>
	);
}
