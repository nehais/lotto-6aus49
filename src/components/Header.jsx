import { Link } from "react-router-dom";
import LottoLogo from "../assets/lotto-icon.png";

const Header = () => {
  return (
    <div>
      <Link to="/" className="header">
        <img src={LottoLogo} alt="Lotto Logo" className="logo" />
        <p className="logo-name">LOTTO 6aus49</p>
      </Link>
    </div>
  );
};

export default Header;
