import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";

import Header from "./Header";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Icon_id />
    <Navigation_id />
    <Logo_id />
    
  </StrictMode>
);

