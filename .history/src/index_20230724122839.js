import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";


import App from "./App";
import Headers from "./Header";
import Users from "./User";
import introduce from "./introduce";
const Header = createRoot(document.getElementById("Header"));
const User = createRoot(document.getElementById("user"));
const Introduce = createRoot(document.getElementById('introduce'))
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
   <Users /> 
  </StrictMode>
)
Introduce.render(
  <StrictMode>
   <Introduce 
  </StrictMode>
)


