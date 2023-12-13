import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import HeaderMenu from "./components/HeaderMenu";
import Header from "./components/Header";
import MainWork from "./components/MainWork";
import MainWorkItem from "./components/MainWorkItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <MainWork />
    <MainWorkItem />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();