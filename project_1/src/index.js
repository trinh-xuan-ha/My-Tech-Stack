import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Header from "./pages/mainLayout/Header";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./pages/mainLayout/Navigation";
import MainImage from "./pages/mainLayout/MainTitleImage";
import Container from "./pages/mainLayout/Container";
import Main from "./pages/mainLayout/Main";
import LookShop from "./pages/mainLayout/LookShop";
import ShopTitle from "./pages/ShopTitle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Navigation></Navigation>
    <MainImage></MainImage>
    <Container></Container>
    <Main></Main>
    <LookShop></LookShop>
    <ShopTitle></ShopTitle>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
