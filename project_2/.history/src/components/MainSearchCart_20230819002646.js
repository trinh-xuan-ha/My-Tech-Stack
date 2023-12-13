import InputSelectCart from "./maincontent/InputSelectCart.js/InputSelectCart";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
import "../styles/iputsearch.css";
function MainSearch() {
  const option = [
    {
      select1: "10",
      select2: 25,
      select3: 50,
      select4: 100,
      select5: "All",
    },
  ];
  return (
    <nav className="main-full">
      <div className="main-search-option-btn">
        <div className="option-number">
          <InputSelectCart
            describe={option.describe}
            select1={option.select1}
            select2={option.select2}
            select3={option.select3}
            select4={option.select4}
            select5={option.select5}
          />
        </div>
        <div className="input-btn-search">
          <input
            placeholder="Search"
            type="search"
            id="searchs"
            name="gsearch"
          />

          <a className="btn-export" href="#">
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
