import ContainerFrame from "./container/ContainerFrame";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaAddressCardSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import ContainerCartFrame from "./container/ContainerCartFrame";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import image1 from "../../assets/images/collection-1_380x.webp";
import image2 from "../../assets/images/collection-2_380x.webp";
import image3 from "../../assets/images/collection-3_380x.webp";
import image4 from "../../assets/images/collection-4_380x.webp";
import "../../styles/Container.css";
function Container() {
  const lists = [
    {
      //!
      //?
      //
      //*
      //@param
      icon: <LiaShippingFastSolid />,
      h3Text: "FREE SHIPPING : ",
      pText:
        "All orders of $49 or more of eligible items across any product category qualify.",
    },
    {
      icon: <LiaAddressCardSolid />,
      h3Text: "CREDIT CARDS : ",
      pText: "We accept Visa, American Express, Mastercard, and Discover.",
    },
    {
      icon: <TbTruckReturn />,
      h3Text: "RETURN POLICY : ",
      pText:
        "You can return your online order within 30 days of receiving your order.",
    },
  ];
  const carts = [
    {
      image: image1,
      h3Text: "SWIMWEAR",
      pText:
        "Stand out from the Crowd with Our Wide Range of Brands and Styles ",
      aText: "Shop Now",
    },
    {
      image: image2,
      h3Text: "SWIMWEAR",
      pText:
        "Stand out from the Crowd with Our Wide Range of Brands and Styles ",
      aText: "Shop Now",
    },
    {
      image: image3,
      h3Text: "SWIMWEAR",
      pText:
        "Stand out from the Crowd with Our Wide Range of Brands and Styles ",
      aText: "Shop Now",
    },
    {
      image: image4,
      h3Text: "SWIMWEAR",
      pText:
        "Stand out from the Crowd with Our Wide Range of Brands and Styles ",
      aText: "Shop Now",
    },
  ];
  return (
    <div className="container">
      <div className="container_title">
        {lists.map((ContainerFrames, index) => (
          <ContainerFrame
            key={index}
            icon={ContainerFrames.icon}
            h3Text={ContainerFrames.h3Text}
            pText={ContainerFrames.pText}
          />
        ))}
      </div>
      <div className="container_inner">
        {carts.map((cartFrame, index) => (
          <ContainerCartFrame
            key={index}
            image={cartFrame.image}
            h3Text={cartFrame.h3Text}
            pText={cartFrame.pText}
            aText={
              <>
                {cartFrame.aText} <HiOutlineArrowLongRight />
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
export default Container;
