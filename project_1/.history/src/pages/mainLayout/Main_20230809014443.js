import MainCart from "./main/MainCart";
import React, { useState, useEffect } from "react";
// import image_1 from "../../assets/images/1_cfca3921-6375-4ad9-86b8-2160e61f899c_600x_1.webp";
import image_1 from "../../assets/images/look_shop_1.webp";
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
import image_12 from "../../assets/images/1_a65094a8-2044-46c2-ad97-3cd5d544351d_720x_7.1.webp";
import image_13 from "../../assets/images/2_cd838401-97fd-4998-8179-51780ad74b71_720x_7.2.webp";
import image_14 from "../../assets/images/1_f7eec18a-ac80-40bf-b77c-a5e00c6dbaf1_720x_8.1.webp";
import image_15 from "../../assets/images/2_9ecb603c-f76d-4b84-9276-b9550b30463c_720x_8.2.webp";
import image_16 from "../../assets/images/1_3d6919aa-67fb-4d45-9108-a25b9ef06081_720x9.1.webp";
import image_17 from "../../assets/images/2_142de864-14d6-45b4-9ea7-75d9fbe34e4b_720x9.2.webp";
import image_18 from "../../assets/images/1_90edff81-45ac-4d6d-b503-97677d4f4dd2_540x10.1.webp";
import image_19 from "../../assets/images/2_2e1fe1ca-4c1f-4ef1-b7d6-6a0e9bcd2ac6_540x10.2.webp";
import image_20 from "../../assets/images/1_429c36db-33c1-4260-b2da-d15283aa3505_540x11.1.webp";
import image_21 from "../../assets/images/2_47db5edb-019a-4422-8107-5ad68be1ad63_540x11.2.webp";
import image_22 from "../../assets/images/1_72e9f875-ce27-40e0-8c1c-fdfc3d974734_540x12.1.webp";
import image_23 from "../../assets/images/2_9d4a68ac-bd4a-46a4-aecf-106d1acc7162_540x12.2.webp";
import image_24 from "../../assets/images/1_9abba7cf-c2f0-4216-b65c-eecc48a42873_540x13.1.webp";
import image_25 from "../../assets/images/2_e5afa004-d787-4e0e-97bf-4eda5e63edac_540x13.2.webp";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import "../../styles/Main.css";

function Main() {
  const [currentGroup, setCurrentGroup] = useState(1);
  const group1List = [
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
      spanText: 15.0,
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
      spanText: 12.0,
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
      spanText: 22.0,
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
      spanText: 25.0,
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
      spanText: 27.0,
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
      spanText: 25.0,
    },
  ];
  const group2List = [
    {
      image1: image_12,
      image2: image_13,
      h4Text: "High turtleneck jumper",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStar />,
      ],
      spanText: 15.0,
    },
    {
      image1: image_14,
      image2: image_15,
      h4Text: "Sherpa denim jacket",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: 12.0,
    },
    {
      image1: image_16,
      image2: image_17,
      h4Text: "Rick & Morty T-shirt",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: 22.0,
    },
    {
      image1: image_18,
      image2: image_19,
      h4Text: "Long-sleeved Shirt",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: 25.0,
    },
    {
      image1: image_20,
      image2: image_21,
      h4Text: "Hoodies coat for women",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ],
      spanText: 27.0,
    },
    {
      image1: image_22,
      image2: image_23,
      h4Text: "Parka jacket with hood",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      spanText: 25.0,
    },
  ];
  const group3List = [
    {
      image1: image_24,
      image2: image_25,
      h4Text: "High turtleneck jumper",
      pText: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStar />,
      ],
      spanText: 15.0,
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
      spanText: 12.0,
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
      spanText: 22.0,
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
      spanText: 25.0,
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
      spanText: 27.0,
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
      spanText: 25.0,
    },
  ];

  const groups = [group1List, group2List, group3List];
  //định nghĩa hàm handle nhận đối số là groupnumber là thứ tự của sản phẩm
  //gọi hàm setCurrentGroup để cập nhật giá trị CurrentGroup với số thứ tự tường ứng
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
            spanText={"$" + maincart.spanText.toFixed(2)}
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
