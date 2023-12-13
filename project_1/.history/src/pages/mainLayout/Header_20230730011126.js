
import Infomation from "./header/HeaderInfomation";
import("../../styles/Header.css");
import { BiSolidDownArrow } from "react-icons/bs";

import PayLu from "./header/PayLanguage";
function Header() {
    return (
        <header id="header">
            <Infomation />
            <div className="title_ship">
                <p className="ship_text">FREE SHIPPING FOR ORDER ABOVE $200.</p>
                <a href="#" title="#">Shop now !</a>
            </div>
          <PayLu aText = "Languege" icon = {BiSolidDownArrow} classname = "language"></PayLu>
           
        </header>
    )
}
export default Header;