import InputSelectCart from "./maincontent/InputSelectCart.js/InputSelectCart";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoIosAdd } from "react-icons/io";
function MainSearch() {
  const option = [
    {
      select1: 10,
      select2: 25,
      select3: 50,
      select4: 100,
      select5: "All",
    },
  ];
  return (
    <div className="main-search-option">
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
        <form className="input_search">
          <input
            placeholder="Search"
            type="search"
            id="searchs"
            name="gsearch"
          />
        </form>
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
  );
}
export default MainSearch;
