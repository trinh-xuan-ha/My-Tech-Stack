import { AiOutlineHeart } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <div className="footer-date">
        <span> © 2023 Made With </span>
        <AiOutlineHeart></AiOutlineHeart>
        "By"
        <a href="#">Pĩinvent</a>
      </div>
      <div className="footer-btn">
        <a href="#">License</a>
        <a href="#">More Themes</a>
        <a href="#">Documentation</a>
      </div>
    </footer>
  );
}
export default Footer;
