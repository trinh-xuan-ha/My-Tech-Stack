import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";


import App from "./App";
import Headers from "./Header";
const Header_id = createRoot(document.getElementById("Header"));


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />   
  </StrictMode>
);
Header_id.render (
  <StrictMode>
    <Headers  
  </StrictMode>
)


