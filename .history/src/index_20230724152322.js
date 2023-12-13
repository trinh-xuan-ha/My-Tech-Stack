import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";



import Headers from "./Header";
import Users from "./User";
import Introduces from "./Introduce";
import Mains from "./Main";
import Footers from "./Footer";
const Header = createRoot(document.getElementById("Header"));
const Main = createRoot(document.getElementById("main"));
const User = createRoot(document.getElementById("user"));
const Introduce = createRoot(document.getElementById('introduce'));
const Footer = createRoot(document.getElementById("footer"));

Header.render (
  <StrictMode>
    <Headers />  
  </StrictMode>
);
User.render (
  <StrictMode>
   <Users /> 
  </StrictMode>
);
Introduce.render (
  <StrictMode>
   <Introduces />
  </StrictMode>
)
Main.render(
  <StrictMode>
   <Mains />
  </StrictMode>
)
f


