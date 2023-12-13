import { useEffect } from "react";


function TitleImage(props) {
    const{pText, h3Text, buttonText, imageUrl} = props;
    useEffect(() => {
        const timeout = setTimeout(() =>{
          setComponents((prevComponent) =>{
            prevComponent.filter((component)=> component !== props)
          }) ;     
        }, 5000)
        return()
    },[])
}
export default TitleImage;