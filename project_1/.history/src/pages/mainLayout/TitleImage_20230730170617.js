import { useEffect } from "react";


function TitleImage(props) {
    const{pText, h3Text, buttonText, imageUrl} = props;
    useEffect(() => {
        const timeout = setTimeout(() =>{
          setComponents((prevComponent) =>{
            prevComponent.filter((component)=> component !== p)
          })      
        }, 5000)
    },[])
}
export default TitleImage;