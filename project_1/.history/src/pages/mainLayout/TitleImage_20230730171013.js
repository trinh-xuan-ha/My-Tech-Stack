import { useEffect } from "react";


function TitleImage(props) {
    const{pText, h3Text, buttonText, imageUrl} = props;
    useEffect(() => {
        const timeout = setTimeout(() =>{
            setComponents((prevComponent) =>{
            prevComponent.filter((component)=> component !== props)
          }) ;     
        }, 5000)
        return () =>clearTimeout(timeout);
    },[]);
    return (
        <div className="img_title">
            <div className="image_main">
                <img src={imageUrl} alt="error"/>
            </div>
            <div className="image_text">
                <p>{pt}</p>
            </div>
        </div>
    )
}
export default TitleImage;