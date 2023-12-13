import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";


import App from "./App";
import Headers from "./Header";
im
const Header = createRoot(document.getElementById("Header"));
const User = createRoot(document.getElementById("user"));

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
     
  </StrictMode>
);
Header.render (
  <StrictMode>
    <Headers />  
  </StrictMode>
);
User.render (
  <StrictMode>
   <User /> 
  </StrictMode>
)


