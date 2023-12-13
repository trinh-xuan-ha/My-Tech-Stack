
import Infomation from "./header/HeaderInfomation";
import("../../styles/Header.css")
import PayLu from "./header/PayLanguage";
function Header() {
    return (
        <header id="header">
            <Infomation />
            <div className="title_ship">
                <p className="ship_text">FREE SHIPPING FOR ORDER ABOVE $200.</p>
                <a href="#" title="#">Shop now !</a>
            </div>
            { aText, icon, classname }
            <PayLu aText = "Languege" icon =  classname = "language"  />
        </header>
    )
}
export default Header;