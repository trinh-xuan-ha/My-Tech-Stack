

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Icon from "./Icon";
const Header = createRoot(document.getElementById("Header"));
Header.render(
    <StrictMode>
        <Logo 
    </StrictMode>
)
function Header() {
    return (
        <h1>ha</h1>
    )
}
export default Header
