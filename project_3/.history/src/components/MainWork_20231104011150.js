import MainWorkItem from "./MainWorkItem";
import Logo1 from "../assets/images/apple1.svg";
import Logo2 from "../assets/images/tang-new.svg";
import Logo3 from "../assets/images/ungdung2.svg";
import Logo4 from "../assets/images/aaaad.svg";
import "../styles/Mainwork.css";

function MainWork() {
  const groupListLogo = [
    {
      Images: Logo1,
      Text: "Discover, Explore the Product",
      Number: 1,
    },
    {
      Images: Logo2,
      Text: "Product UX, Design & Development",
      Number: 2,
    },
    {
      Images: Logo3,
      Text: "Art Direction & Brand Strategy",
      Number: 3,
    },
    {
      Images: Logo4,
      Text: "Marketing Strategy & SEO Campaigns",
      Number: 4,
    },
  ];
  return (
    <div className="main-work">
      <div className="work-logo">
        {groupListLogo.map((logos, index) => (
          <MainWorkItem
            key={index}
            number={logos.Number}
            Item={logos.Images}
            Text={logos.Text}
          />
        ))}
      </div>
      <div className="work-title">
        <h2 className="work-title_text">
          More than
          <h2 className="work-title_text_number">80,000+</h2> companies trust
          Micpro
        </h2>
      </div>
      <div className="work-footer"></div>
    </div>
  );
}
export default MainWork;
