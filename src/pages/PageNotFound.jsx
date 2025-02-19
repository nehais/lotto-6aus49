import "../styles/PageNotFound.css";
import PageError from "../assets/404.png";

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <img
        src={PageError}
        alt="Seite nicht gefunden"
        className="error-page-icon"
      />
      <h3>Seite nicht gefunden</h3>
      <Link to="/">
        <button className="home-buttons rules-play-button">Startseite</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
