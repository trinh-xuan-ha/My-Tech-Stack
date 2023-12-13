
import Logo from "./Logo";
import Navigation from "./Navigation";
import Icon from "./Icon";
import "./Header.css"

function Headers() {
    return (
        <div className="logo">
            <Logo />
        </div>,
        <div className="navigation">
            <Navigation />
        </div>
        <div className="icon">
            <Icon />
        </div>
    )
}
export default Headers;
