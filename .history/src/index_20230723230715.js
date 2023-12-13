import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";

import Header from "./Header";
import App from "./App";
import Logo from "./Logo";
import navigation from "./navigation";
const logo = createRoot(document.getElementById("logo"));
const Navigation = createRoot(document.getElementById("navigation"));

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    
  </StrictMode>
);
logo.render(
  <StrictMode>
      <Logo/>
  </StrictMode>
);
Navigation.render(
  <StrictMode>
      <Navigation/>
      </StrictMode>
);