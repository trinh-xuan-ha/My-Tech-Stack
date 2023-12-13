import React, { useState, useEffect } from "react";
import TitleImage from "./titleImage/TitleImage";
import logo_1 from "../../assets/images/banner-home1-1-min_2048x_1.webp";
import logo_2 from "../../assets/images/banner-home1-2-min-min_2048x_2.webp";
import logo_3 from "../../assets/images/s-1-3_2048x_3.webp";
import ("../../styles/imageTitle.css")

function MainImage() {
  const images = [
    {
      pText: 'NEW ARRIVARS',
      h2Text_1: 'WOMEN',
      h2Text_2: 'GLASSES',
      buttonText: 'Show now',
      imageUrl: logo_1,
    },
    {
      pText: 'NEW ARRIVARS',
      h2Text_1: 'AUTUMN',
      h2Text_2: 'OVERCOAT',
      buttonText: 'Show now',
      imageUrl: logo_2,
    },
    {
      pText: 'WOMEN OF SUMMER',
      h2Text: 'WOMEN DESSES',
      h2Text: 'WOMEN DESSES',
      buttonText: 'show now',
      imageUrl: logo_3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Thay đổi currentIndex sau 5 giây
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup
  }, [currentIndex]); // Effect này sẽ chạy lại mỗi khi currentIndex thay đổi

  return (
    <div className="main_logo">
      <TitleImage
        pText={images[currentIndex].pText}
        h2Text={images[currentIndex].h2Text}
        buttonText={images[currentIndex].buttonText}
        imageUrl={images[currentIndex].imageUrl}
      />
    </div>
  );
}

export default MainImage;