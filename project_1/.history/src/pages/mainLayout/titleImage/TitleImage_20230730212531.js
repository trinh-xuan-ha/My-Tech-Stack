import { useEffect } from "react";

function TitleImage(props) {
  const { pText, h2Text, buttonText, imageUrl } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComponents((prevComponents) =>
        prevComponents.filter((component) => component !== props)
      );
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="img_title">
      <div className="image_main">
        <img src={imageUrl} alt="error" />
      </div>
      <div className="image_text">
        <p>{pText}</p>
        <h2>{h2Text}</h2>
        <a href="#">{buttonText}</a>
      </div>
    </div>
  );
}

export default TitleImage;
jsx
Copy code
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
Các điểm chính đã sửa:

Trong component TitleImage, bạn cần import hook useState từ react.

Trong component MainImage, trong hàm useEffect của TitleImage, bạn cần sử dụng hook useState để truy cập và cập nhật lại state components.

Trong phần map để render các TitleImage, bạn cần sử dụng tên biến component (lowercase) thay vì Component (uppercase) để truy cập vào các thông tin trong mảng components.

Trong phần render của TitleImage, bạn cần di chuyển thuộc tính key vào trong component TitleImage, bên ngoài các props khác.





