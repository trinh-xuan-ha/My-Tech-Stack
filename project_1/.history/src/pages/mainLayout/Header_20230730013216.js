import Infomation from "./header/HeaderInfomation";
import { BiSolidDownArrow } from "react-icons/bs";
import PayLu from "./header/PayLanguage";
import "../../styles/Header.css";

function Header() {
    return (
        <header id="header">
            <Infomation />
            <div className="title_ship">
                <p className="ship_text">FREE SHIPPING FOR ORDER ABOVE $200.</p>
                <a href="#" title="now">Shop now !</a>
            </div>
            <div className="paylanguage">
                <PayLu aText="Language" icon={<BiSolidDownArrow />} className="language" />
                 <PayLu aText="USD" icon={<BiSolidDownArrow />} className="usd" />
            </div>
        
        </header>
    )
}

export default Header;