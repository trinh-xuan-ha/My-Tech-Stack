import MainWorkItem from "./MainWorkItem";
import Logo1 from "../assets/images/apple.svg";
import Logo2 from "../assets/images/tang.svg";
import Logo3 from "../assets/images/ungdung.svg";
import Logo4 from "../assets/images/loa.svg";

function MainWork() {
  const groupListLogo = [
    {
      Image: Logo1,
      Text: "Discover, Explore the Product",
    },
    {
      Image: Logo2,
      Text: "Product UX, Design & Development",
    },
    {
      Image: Logo3,
      Text: "Art Direction & Brand Strategy",
    },
    {
      Image: Logo4,
      Text: "Marketing Strategy & SEO Campaigns",
    },
  ];
  return (
    <div className="main-work">
      <div className="work-logo"></div>
      <div className="work-title"></div>
      <div className="work-footer"></div>
    </div>
  );
}
export default MainWork;
