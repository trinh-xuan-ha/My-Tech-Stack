import MainWorkItem from "./MainWorkItem";
import Logo1 from "../assets/images/apple1.svg";
import Logo2 from "../assets/images/tang-new.svg";
import Logo3 from "../assets/images/ungdung2.svg";
import Logo4 from "../assets/images/aaaad.svg";
import Logo5 from "../assets/images/slack.jpg";
import Logo6 from "../assets/images/amazon.svg";
import Logo7 from "../assets/images/woocommerce.svg";
import Logo8 from "../assets/images/meundies.svg";
import Logo9 from "../assets/images/sitepoint.svg";
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
          More tha
          <span className="work-title_text_number">n 80,000 +</span> companies
          trust Micpro
        </h2>
        <div className="work-title_icon">
          <img src={Logo5} alt="error"></img>
          <img src={Logo6} alt="error"></img>
          <img src={Logo7} alt="error"></img>
          <img src={Logo8} alt="error"></img>
          <img src={Logo9} alt="error"></img>
        </div>
      </div>
      <div className="work-footer"></div>
    </div>
  );
}
export default MainWork;
