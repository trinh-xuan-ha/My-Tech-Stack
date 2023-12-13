import { useEffect } from "react";

function TitleImage(props) {
  const { pText, h2Text, buttonText, imageUrl, setComponents } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComponents((prevComponents) =>
        prevComponents.filter((component) => component !== props)
      );
    }, 5000);

    return () => clearTimeout(timeout);
  }, [setComponents]);

  return (
    <div className="img_title">
      <div className="image_main">
        <img src={imageUrl} alt="error" />
      </div>
      <div className="image_text">
        <p>{pText}</p>
        <h2>{h2Text}</h2>
        <h2>{h2Text}</h2>
        <a href="#">{buttonText}</a>
      </div>
    </div>
  );
}

export default TitleImage;