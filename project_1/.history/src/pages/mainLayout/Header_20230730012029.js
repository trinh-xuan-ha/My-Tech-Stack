
import Infomation from "./header/HeaderInfomation";
import { BiSolidDownArrow } from "react-icons/bs";
import PayLu from "./header/PayLanguage";
import("../../styles/Header.css");

function Header() {
    return (
        <header id="header">
            <Infomation />
            <div className="title_ship">
                <p className="ship_text">FREE SHIPPING FOR ORDER ABOVE $200.</p>
                <a href="#" title="#">Shop now !</a>
            </div>
          <PayLu aText = "Language" icon = {BiSolidDownArrow} classname = "language"></PayLu>
           
        </header>
    )
}
export default Header;