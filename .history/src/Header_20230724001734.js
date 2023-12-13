
import Logo from "./Logo";
import Navigation from "./Navigation";
import Icon from "./Icon";
import { createRoot } from "react-dom/client";
const Header = createRoot(document.getElementById)

Logo_id.render(
    <StrictMode>
        <Logo/>
    </StrictMode>
);
Navigation_id.render(
    <StrictMode>
        <Navigation/>
        </StrictMode>
);
Icon_id.render(
    <StrictMode>
        <Icon/>
        </StrictMode>  
)
function Header() {
    return (
        <h1>ha</h1>
    )
}
export default Header
