import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";

import "./global.css";

ReactDOM.render(
	<AuthContextProvider>
		<App />
	</AuthContextProvider>,
	document.getElementById("root")
);
