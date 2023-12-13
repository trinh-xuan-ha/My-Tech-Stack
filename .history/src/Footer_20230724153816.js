import Icon from "./Icon";
import Logo from "./Logo";
import Navigation from "./Navigation";
import "./footer.css";
function Footers() {
    return(
        <div>
            
        </div>
        <div className="footer_1">
            <div className="logo">
            <Logo />
            </div>
            <div className="infomation">
                <ul>
                    <li>0327761969</li>
                    <li>Trinhxuanha@gmail.com</li>
                </ul>
            </div>
            <div className="icon">
            <Icon />
        </div>
        <div className="footer_2">
            <div className="navigation">
                <Navigation />
            </div>
        </div>
        </div>
        
    )
}
export default Footers;