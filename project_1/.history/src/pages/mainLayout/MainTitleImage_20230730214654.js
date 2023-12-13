import { useEffect, useState } from "react";
import TitleImage from "./titleImage/TitleImage";
import logo_1 from "../../assets/images/banner-home1-1-min_2048x_1.webp";
import logo_2 from "../../assets/images/banner-home1-2-min-min_2048x_2.webp";
import logo_3 from "../../assets/images/s-1-3_2048x_3.webp";

function MainImage() {
  const images = [
    {
      pText: 'NEW ARRIVARS',
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
      h2Text: 'WOMEN DESSES',
      buttonText: 'show now',
      imageUrl: logo_3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="main_logo">
      <TitleImage
        pText={images[currentIndex].pText}
        h2Text={images[currentIndex].h2Text}
        buttonText={images[currentIndex].buttonText}
        imageUrl={images[currentIndex].imageUrl}
        setComponents={setCurrentIndex} 
        // Truyền hàm setComponents xuống TitleImage
      />
    </div>
  );
}

export default MainImage;