import logo from "../assets/images/logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
function HeaderMenu() {
  return (
    <div className="header-section">
      <div className="header-logo">
        <img src={logo} alt="logo"></img>
        <p className="logo_text">MicPro</p>
        <div></div>
      </div>
      <div className="header-menu">
        <ul className="menu-container">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">
              Services <MdKeyboardArrowDown />
            </a>
          </li>
          <li>
            <a href="#">
              Expertise <MdKeyboardArrowDown />
            </a>
          </li>
          <li>
            <a href="#">Cases</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">
              Company <MdKeyboardArrowDown />
            </a>
          </li>
        </ul>
      </div>
      <div className="header-btn-start">
        <button class="btn-user">
          <a class="btn_start">Start a Project</a>
        </button>
      </div>
    </div>
  );
}
export default HeaderMenu;
