import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spielen" element={<Game />} />
          <Route path="/spielregeln" element={<Rules />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
