import { Component, useState } from "react";
import TitleImage from "./titleImage/TitleImage";
import logo_1 from "../../assets/images/banner-home1-1-min_2048x_1.webp";
import logo_2 from "../../assets/images/banner-home1-2-min-min_2048x_2.webp";
import logo_3 from "../../assets/images/s-1-3_2048x_3.webp";

function MainImage() {
  const [components, setComponents] = useState([
    {
      pText: 'NEW ARRIVALS',
      h2Text: 'WOMEN GLASSES',
      buttonText: 'Show now',
      imageUrl: logo_1,
    },
    {
      pText: 'Đoạn text 1 của Component 2',
      h2Text: 'AUTUMN OVERCOAT',
      buttonText: 'Show now',
      imageUrl: logo_2,
    },
    {
      pText: 'WOMEN Ò SUMMER',
      h2Text: 'WOMEN DRESSES',
      buttonText: 'show now',
      imageUrl: logo_3,
    },
  ]);

  return (
    <div className="main_logo">
      {components.map((component, index) => (
        <TitleImage
          key={index}
          pText={component.pText}
          h2Text={component.h2Text}
          buttonText={component.buttonText}
          imageUrl={component.imageUrl}
        />
      ))}
    </div>
  );
}

export default MainImage;