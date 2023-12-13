import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";

import Logo from "./Logo";
import Navigation from "./Navigation";
const logo = createRoot(document.getElementById('logo'));
const Navigation_id = createRoot(document.getElementById('navigation'));

logo.render(
    <StrictMode>
        <Logo/>
    </StrictMode>
)
Navigation.render(
    <StrictMode>
        <Navigation/>
        </StrictMode>
)
function Header () {

}
export default Header;