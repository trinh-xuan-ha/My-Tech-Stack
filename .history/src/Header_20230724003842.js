
import Logo from "./Logo";
import Navigation from "./Navigation";
import Icon from "./Icon";
import "./Header.css"
const Header = createRoot(document.getElementById("Header"));
Header.render(
    <StrictMode>
        <Logo />
        <Navigation />
        <Icon />
    </StrictMode>
)
function Headers() {
    return (
        <div className="logo">
            <Logo />
        </div>
        <div className=""></div>
    )
}
export default Headers
