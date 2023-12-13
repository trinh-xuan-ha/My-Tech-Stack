import { useEffect } from "react";

function TitleImage(props) {
  const { pText, h2Text_1, h2Text_2, buttonText, imageUrl, setComponents } =
    props;

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
        <h2>{h2Text_1}</h2>
        <h2>{h2Text_2}</h2>
        <a href="#">{buttonText}</a>
      </div>
      <nav className="nav-overlay"></nav>
    </div>
  );
}

export default TitleImage;