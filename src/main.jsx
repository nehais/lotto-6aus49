import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { GameWrapper } from "./contexts/game.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameWrapper>
      <Router>
        <App />
      </Router>
    </GameWrapper>
  </StrictMode>
);
