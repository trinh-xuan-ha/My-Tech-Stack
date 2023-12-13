import logo from "../assets/images/logo.svg";
function HeaderMenu() {
  return (
    <div className="header-section">
      <div className="header-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path d="M23.9999 18V6H35.9999V30.1818H23.9999V18Z" fill="#1663F9" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.8182 6L0 18V30.1818H11.8183V18L24 6.0001V6H11.8182Z"
            fill="#F961D8"
          />
        </svg>
        <p className="logo_text">MicPro</p>
      </div>
      <div className="header-menu"></div>
      <div className="header-btn-start"></div>
    </div>
  );
}
export default HeaderMenu;
