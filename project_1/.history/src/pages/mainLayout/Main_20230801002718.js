import MainCart from "./main/MainCart";
import image_1 from "../../assets/images/3_cf3a35ed-254a-4d62-9a2e-24254e42c60f_720x_2.1.webp";
import image_2 from "../../assets/images/3_cf3a35ed-254a-4d62-9a2e-24254e42c60f_720x_2.1.webp";
import image_3 from "../../assets/images/1_62d94e0a-e49c-4fb1-8a64-2b11e633e54d_720x_2.2.webp";
import image_4 from "../../assets/images/1_fec1f277-1996-4f9a-b1bc-e8f4772e8fdc_720x_3.1.webp";
import image_5 from "../../assets/images/2_0b54e4a3-b011-4308-9422-50bf6b96367c_720x_3.2.webp";
import image_6 from "../../assets/images/1_1481f4e4-3a45-4338-bc88-3b8e5a7e6704_720x_4.1.webp";
import image_7 from "../../assets/images/2_664c3b5d-f86c-43ad-a880-0e96fa746656_720x_4.2.webp";
import image_8 from "../../assets/images/1_066d9152-8837-4f30-ae4d-583c3a1a95e7_720x_5.1.webp";
import image_9 from "../../assets/images/2_b10a96cf-fb5e-4141-999c-832db2968dcb_720x_5.2.webp";
import image_10 from "../../assets/images/1_69e3cbcb-e1e8-4fd6-8376-0c675c06364a_720x_6.1.webp";
import image_11 from "../../assets/images/2_84b787f8-c429-49d9-9ffa-846c38336d5f_720x_6.2.webp";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import "../../styles/Main.css";

function Main() {
  const lists = [
    {
      image1: image_1,
      image2: image_1,
      h4Text: "High turtleneck jumper",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStar />,
      ],
      spanText: "dsdsdsdsdsd",
    },
    {
      image1: image_2,
      image2: image_3,
      h4Text: "dsdsdsdsd",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStar />,
      ],
      spanText: "dsdsdsdsdsd",
    },
    {
      image1: image_4,
      image2: image_5,
      h4Text: "dsdsdsdsd",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStar />,
      ],
      spanText: "dsdsdsdsdsd",
    },
    {
      image1: image_6,
      image2: image_7,
      h4Text: "dsdsdsdsd",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStar />,
      ],
      spanText: "dsdsdsdsdsd",
    },
    {
      image1: image_8,
      image2: image_9,
      h4Text: "dsdsdsdsd",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStar />,
      ],
      spanText: "dsdsdsdsdsd",
    },
    {
      image1: image_10,
      image2: image_11,
      h4Text: "dsdsdsdsd",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStar />,
      ],
      spanText: "dsdsdsdsdsd",
    },
  ];
  return (
    <div id="main">
      <h3> New For You</h3>
      <div className="main_product">
        {lists.map((maincart, index) => (
          <MainCart
            key={index}
            image1={maincart.image1}
            image2={maincart.image2}
            h4Text={maincart.h4Text}
            pText={maincart.pText}
            spanText={maincart.spanText}
          />
        ))}
      </div>
    </div>
  );
}
export default Main;
