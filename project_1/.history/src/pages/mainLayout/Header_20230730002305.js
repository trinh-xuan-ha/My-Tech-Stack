
import Infomation from "./header/HeaderInfomation";
import("../../styles/Header.css")
function Header() {
    return (
        <header id="header">
            <Infomation />
            <div className="title_ship"></div>
        </header>
    )
}
export default Header;