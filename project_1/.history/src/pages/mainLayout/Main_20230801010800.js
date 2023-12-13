import MainCart from "./main/MainCart";
import React, { useState, useEffect } from "react";
import image_1 from "../../assets/images/1_cfca3921-6375-4ad9-86b8-2160e61f899c_600x_1.webp";
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
  const [currentGroup, setCurrentGroup] = useState(1);
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
      spanText: "$15.00",
    },
    {
      image1: image_2,
      image2: image_3,
      h4Text: "Sherpa denim jacket",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$12.00",
    },
    {
      image1: image_4,
      image2: image_5,
      h4Text: "Rick & Morty T-shirt",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$22.00",
    },
    {
      image1: image_6,
      image2: image_7,
      h4Text: "Long-sleeved Shirt",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$25.00",
    },
    {
      image1: image_8,
      image2: image_9,
      h4Text: "Hoodies coat for women",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ],
      spanText: "$27.00",
    },
    {
      image1: image_10,
      image2: image_11,
      h4Text: "Parka jacket with hood",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$25.00",
    },
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
      spanText: "$15.00",
    },
    {
      image1: image_2,
      image2: image_3,
      h4Text: "Sherpa denim jacket",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$12.00",
    },
    {
      image1: image_4,
      image2: image_5,
      h4Text: "Rick & Morty T-shirt",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$22.00",
    },
    {
      image1: image_6,
      image2: image_7,
      h4Text: "Long-sleeved Shirt",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$25.00",
    },
    {
      image1: image_8,
      image2: image_9,
      h4Text: "Hoodies coat for women",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ],
      spanText: "$27.00",
    },
    {
      image1: image_10,
      image2: image_11,
      h4Text: "Parka jacket with hood",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$25.00",
    },
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
      spanText: "$15.00",
    },
    {
      image1: image_2,
      image2: image_3,
      h4Text: "Sherpa denim jacket",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$12.00",
    },
    {
      image1: image_4,
      image2: image_5,
      h4Text: "Rick & Morty T-shirt",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$22.00",
    },
    {
      image1: image_6,
      image2: image_7,
      h4Text: "Long-sleeved Shirt",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$25.00",
    },
    {
      image1: image_8,
      image2: image_9,
      h4Text: "Hoodies coat for women",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ],
      spanText: "$27.00",
    },
    {
      image1: image_10,
      image2: image_11,
      h4Text: "Parka jacket with hood",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: "$25.00",
    },
  ];
  const group1List = lists.slice(0, 6);
  const group2List = lists.slice(6, 12);
  const group3List = lists.slice(12, 18);

  const groups = [group1List, group2List, group3List];

  const handleButtonClick = (groupNumber) => {
    setCurrentGroup(groupNumber);
  };
  return (
    <div id="main">
      <h3> New For You</h3>
      <div className={`main_product main_product_${currentGroup}`}>
        {groups[currentGroup - 1].map((maincart, index) => (
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
      <div className="main_btn">
        <button onClick={() => handleButtonClick(1)}>1</button>
        <button onClick={() => handleButtonClick(2)}>2</button>
        <button onClick={() => handleButtonClick(3)}>3</button>
      </div>
    </div>
  );
}
export default Main;
