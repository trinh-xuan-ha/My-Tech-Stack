import { BiSearch } from "react-icons/bi";
import { LuLanguages } from "react-icons/lu";
import { GrSystem } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import avatar from "../../assets/images/avatar-1-129659bb.png";
import "../../styles/mainsearch.css";
function MainSearch() {
  return (
    <nav className="main-search">
      <div className="search-icon">
        <BiSearch></BiSearch>
        <span>Search</span>
        <span className="icon">⌘K</span>
      </div>
      <div className="user-language">
        <LuLanguages></LuLanguages>
        <GrSystem></GrSystem>
        <BiCategory></BiCategory>
        <BiBell></BiBell>
        <img src={avatar} alt="error" />
      </div>
    </nav>
  );
}
export default MainSearch;
