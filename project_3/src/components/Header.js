import HeaderMenu from "./HeaderMenu";
import "../styles/Header.css";
import HeaderText from "./Headertext";
function Header() {
  return (
    <header>
      <div className="header-new">
        <HeaderMenu />
        <HeaderText />
      </div>
    </header>
  );
}
export default Header;
