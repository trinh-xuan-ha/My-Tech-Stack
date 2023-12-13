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
        <a>License</a>
        <a>More Themes</a>
        <a>Documentation</a>
      </div>
    </footer>
  );
}
export default Footer;
