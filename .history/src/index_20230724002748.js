import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";


import App from "./App";
import Headers from "./Header";
const


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  
    <Headers />
    
  </StrictMode>
);

