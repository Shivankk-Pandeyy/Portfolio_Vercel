import "./Component.css";
import LOGO from "./LOGO.png";
import GIT from "./GIT.png";
import INSTA from "./INSTA.png";
import LI from "./LI.png";
import FB from "./FB.png";
const Footer = () => {
return (
    <div className="footer">
    <div className="footer-logo">
    <img src={LOGO} alt="SHIVANK PANDEY LOGO" title="SHIVANK PANDEY"></img>
    </div>
    <div className="footer-social">
    <img src={INSTA} alt="INSTAGRAM LOGO" title="CONNECT IN INSTAGRAM"></img>
    <img src={FB} alt="FACEBOOK PANDEY LOGO" title="CONNECT IN FACEBOOK"></img>
    <img src={GIT} alt="GITHUB PANDEY LOGO" title="CONNECT IN GITHUB"></img>
    <img src={LI} alt="LINKEDIN PANDEY LOGO" title="CONNECT IN LINKEDIN"></img>
    </div>
    <div className="footer-option">
    <h2>@ Copyright 2024 | All Rights Reserved</h2>
    <h2>Privacy Policy | Terms Of Service | Contact</h2>
    </div>
    </div>
)
}
export default Footer