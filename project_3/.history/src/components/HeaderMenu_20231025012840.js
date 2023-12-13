import logo from "../assets/images/logo.svg";
function HeaderMenu() {
  return (
    <div className="header-section">
      <div className="header-logo">
        <img src={logo} alt="logo"></img>
        <p className="logo_text">MicPro</p>
      </div>
      <div className="header-menu"></div>
      <div className="header-btn-start"></div>
    </div>
  );
}
export default HeaderMenu;
