
import Infomation from "./header/HeaderInfomation";
import("../../styles/Header.css")
function Header() {
    return (
        <header id="header">
            <Infomation />
            <div className="title_ship">
                <p className="ship_text"> FREE SHIPPING FOR ORDER ABOVE $200.</p>
            </div>
        </header>
    )
}
export default Header;