import ProductTeam from "./ProductTeam";
import Image1 from "../assets/images/Frame 490 1.svg";
import Image2 from "../assets/images/Frame 494 1.svg";
import Image3 from "../assets/images/Frame 495 1.svg";
import Image4 from "../assets/images/Frame 496 1.svg";

function MainWorkTeam() {
  const GroupProduct = [
    {
      Applications: "Mobile app, Weather, Software",
      Interfaces: "Weather App UI Kit - WETHY ",
      Desions:
        "Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.",
      Images: Image1,
      Numbers: "1",
    },
    {
      Applications: "Web Design, Video call, Software",
      Interfaces: "Weather App UI Kit - WETHY ",
      Desions:
        "Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.",
      Images: Image2,
      Numbers: "2",
    },
    {
      Applications: "Web app,Software, Car Dashbord",
      Interfaces: "Weather App UI Kit - WETHY ",
      Desions:
        "Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.",
      Images: Image3,
      Numbers: "1",
    },
    {
      Applications: "Web Design, Software",
      Interfaces: "Weather App UI Kit - WETHY ",
      Desions:
        "Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays.",
      Images: Image4,
      Numbers: "2",
    },
  ];
  return (
    <div className="main-product">
      {GroupProduct.map((product, index) => (
        <ProductTeam
          key={index}
          Application={product.Applications}
          Interface={product.Interfaces}
          Desion={product.Desions}
          Image={product.Images}
          Number={product.Numbers}
        />
      ))}
    </div>
  );
}
export default MainWorkTeam;
