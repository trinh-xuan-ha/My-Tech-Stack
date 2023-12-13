
import Infomation from "./header/HeaderInfomation";
import("../../styles/Header.css")
function Header() {
    return (
        <header id="header">
            <Infomation />
            <div className="title_ship">
                <p ></p>
            </div>
        </header>
    )
}
export default Header;