import "../styles/Rules.css";

import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="rules">
      <ul>
        <h4>Für das Spiel gelten die folgenden Regeln</h4>
        <li>Es gibt insgesamt 49 Felder, die User anklicken können.</li>{" "}
        <li>
          Für einen gültigen Spielschein müssen User genau 6 Felder ankreuzen.
        </li>{" "}
        <li>
          Wenn 6 Felder angeklickt wurden, darf man keine weiteren Felder
          anklicken können.
        </li>
        <li>
          Ein bereits gewähltes Feld kann durch einen Klick wieder abgewählt
          werden.
        </li>
        <li>
          Wenn 6 Felder angekreuzt wurden, soll ein "Weiter"-Button erscheinen,
          auf dessen Klick dann die gewählten Zahlen sortiert ausgegeben werden.
        </li>
      </ul>{" "}
      <Link to="/spielen">
        <button className="home-buttons rules-play-button">Spielen</button>
      </Link>
    </div>
  );
};

export default Rules;
