import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/spielen">
        <button className="home-buttons">Spielen</button>
      </Link>
      <Link to="/spielregeln">
        <button className="home-buttons">Spielregeln</button>
      </Link>
    </div>
  );
};

export default Home;
