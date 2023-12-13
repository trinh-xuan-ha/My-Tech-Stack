
import Logo from "./Logo";
import Navigation from "./Navigation";
import Icon from "./Icon";
import ""
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
        <h1>ha</h1>
    )
}
export default Headers
