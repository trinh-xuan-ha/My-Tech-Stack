import logo from "../assets/images/logo.svg";
function HeaderMenu() {
  return (
    <div className="header-section">
      <div className="header-logo">
        <img src={logo} alt="logo"></img>
        <p className="logo_text">MicPro</p>
      </div>
      <div className="header-menu">
        <ul className="menu-container">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Expertise</a>
          </li>
          <li>
            <a href="">Cases</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
        </ul>
      </div>
      <div className="header-btn-start"></div>
    </div>
  );
}
export default HeaderMenu;
