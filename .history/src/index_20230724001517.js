import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";


import App from "./App";
// import Header from "./Header";
import Logo from "./Logo";
import Icon from "./Icon";
import Navigation from "./Navigation";
import Header from "./Header";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Icon />
    <Navigation />
    <Logo />
    <H
    
  </StrictMode>
);

