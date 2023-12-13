

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
const Header = createRoot(document.getElementById("Header"));
Header.render(
    <StrictMode>

    </StrictMode>
)
function Header() {
    return (
        <h1>ha</h1>
    )
}
export default Header
