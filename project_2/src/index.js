import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Mainlayout from "./layouts/mainlayout";
import Footer from "./components/Footer";
import MainCartList from "./components/MainCartList";
import InputSelect from "./components/maincontent/InputSelect";
import MainSearch from "./components/MainSearch";
import From from "./components/From";
import Table from "./components/Table";
import { useState } from "react";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/ha",
        element: (
          <>
            <MainCartList />
            <div className="all_new-main">
              <InputSelect />
              <MainSearch />
              <Table />
              {/* <From /> */}
            </div>
          </>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
