import { useEffect } from "react";

function TitleImage(props) {
  const { pText, h2Text, buttonText, imageUrl, setComponents } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Thay đổi currentIndex trong component MainImage
      setComponents((prevIndex) => (prevIndex + 1) % images.length);
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