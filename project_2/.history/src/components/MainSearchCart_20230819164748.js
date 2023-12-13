import InputSelectCart from "./maincontent/InputSelectCart.js/InputSelectCart";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import From from "./From";
import { useEffect, useState } from "react";
import "../styles/iputsearch.css";

function MainSearch() {
  const inputs = {
    select1: 10,
    select2: 25,
    select3: 50,
    select4: 100,
    select5: "All",
  };
  const [showFrom, setShowForm] = useState(false);
  const handleExportClick = () => {
    setShowForm(true);
  };
  return (
    <nav className="main-full">
      <div className="main-search-option-btn">
        <div className="option-number">
          <InputSelectCart
            select1={inputs.select1}
            select2={inputs.select2}
            select3={inputs.select3}
            select4={inputs.select4}
            select5={inputs.select5}
          />
        </div>
        <div className="input-btn-search">
          <input
            placeholder="Search"
            type="search"
            id="searchs"
            name="gsearch"
          />

          <a className="btn-export" href="#" onClick={handleExportClick}>
            <HiOutlineDesktopComputer />
            Export
          </a>
          <a className="btn-form" href="#">
            <IoIosAdd />
            Add new User
          </a>
        </div>
      </div>
    </nav>
  );
}
export default MainSearch;
