import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";

import Logo from "./Logo";
import navigation from "./navigation";
const logo = createRoot(document.getElementById('logo'));
const navigation = createRoot(document.getElementById('navigation'));

logo.render(
    <StrictMode>
        <Logo/>
    </StrictMode>
)
navigation.render
function Header () {

}
export default Header;