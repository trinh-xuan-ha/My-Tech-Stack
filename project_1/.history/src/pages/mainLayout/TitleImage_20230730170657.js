import { useEffect } from "react";


function TitleImage(props) {
    const{pText, h3Text, buttonText, imageUrl} = props;
    useEffect(() => {
        const timeout = setTimeout(() =>{
            import React, { useEffect } from 'react';

            function ComponentBox(props) {
              const { text1, text2, buttonText, imageUrl } = props;
            
              useEffect(() => {
                // Sử dụng useEffect để tự động xoá component sau 5 giây
                const timeout = setTimeout(() => {
                  // Xoá component hiện tại khỏi mảng components
                  // Cập nhật lại mảng components bằng cách lọc ra các component khác với component hiện tại
                  setComponents((prevComponents) =>
                    prevComponents.filter((component) => component !== props)
                  );
                }, 5000);
            
                // Cleanup: Xoá timeout khi component unmount
                return () => clearTimeout(timeout);
              }, []);
            
              return (
                <div className="component-box">
                  <p>{text1}</p>
                  <p>{text2}</p>
                  <button>{buttonText}</button>
                  <img src={imageUrl} alt="Ảnh" />
                </div>
              );
            }
            
            export default ComponentBox;((prevComponent) =>{
            prevComponent.filter((component)=> component !== props)
          }) ;     
        }, 5000)
        return () =>clearTimeout(timeout);
    },[])
}
export default TitleImage;