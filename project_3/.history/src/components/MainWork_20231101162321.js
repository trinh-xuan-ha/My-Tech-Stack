import MainWorkItem from "./MainWorkItem";
import Logo1 from "../assets/images/amazon.svg";
import Logo2 from "../assets/images/ungdung-new.svg";
import Logo3 from "../assets/images/game-new.svg";
import Logo4 from "../assets/images/loa-new.svg";
import Logo5 from "../assets/images/meundies.svg";

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
      Image: Logo5,
      Text: "Marketing Strategy & SEO Campaigns",
    },
  ];
  return (
    <div className="main-work">
      <div className="work-logo">
        {groupListLogo.map((logos, index) => (
          <MainWorkItem key={index} Image={logos.Image} Text={logos.Text} />
        ))}
      </div>
      <div className="work-title"></div>
      <div className="work-footer"></div>
    </div>
  );
}
export default MainWork;
