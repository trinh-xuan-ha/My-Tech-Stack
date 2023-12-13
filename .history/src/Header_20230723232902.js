import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Icon from "./Icon";
const Icon_id = 
const Logo_id = createRoot(document.getElementById('logo'));
const Navigation_id = createRoot(document.getElementById('navigation'));

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
function Header () {

}
export default Header;