import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GameRulesProvider } from "./contexts/GameContext";

import "./global.css";

ReactDOM.render(
	<GameRulesProvider>
		<App />
	</GameRulesProvider>,
	document.getElementById("root")
);
