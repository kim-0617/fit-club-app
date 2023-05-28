import "../assets/css/Footer.css";

import Github from "../assets/images/github.png";
import Instar from "../assets/images/instagram.png";
import LinkedIn from "../assets/images/linkedin.png";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer id="Footer">
      <hr />
      <div className="footer">
        <div className="socail__links">
          <img src={Github} alt="github" />
          <img src={Instar} alt="instar" />
          <img src={LinkedIn} alt="linkedin" />
        </div>

        <div className="logo__f">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      <div className="blur blur__f__1"></div>
      <div className="blur blur__f__2"></div>
    </footer>
  );
};

export default Footer;
