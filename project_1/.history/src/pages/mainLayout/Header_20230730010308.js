
import Infomation from "./header/HeaderInfomation";
import("../../styles/Header.css")
im
function Header() {
    return (
        <header id="header">
            <Infomation />
            <div className="title_ship">
                <p className="ship_text">FREE SHIPPING FOR ORDER ABOVE $200.</p>
                <a href="#" title="#">Shop now !</a>
            </div>
            <Address />
        </header>
    )
}
export default Header;