import "./App.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Rules from "./pages/Rules";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spielen" element={<Game />} />
          <Route path="/spielregeln" element={<Rules />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
