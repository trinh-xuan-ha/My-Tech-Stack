import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";


import App from "./App";
// import Header from "./Header";
// import Logo from "./Logo";
// const Icon_id = createRoot(document.getElementById('icon'));
// const Logo_id = createRoot(document.getElementById('logo'));
// const Navigation_id = createRoot(document.getElementById('navigation'));
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Icon_id />
    <Navigation_id />
    <Logo_id />
    
  </StrictMode>
);

