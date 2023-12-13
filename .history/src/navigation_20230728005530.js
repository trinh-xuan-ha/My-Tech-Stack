// import "./navigation.css";
// function Navigation() {
//     const list_menu = {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: '50px'
//     };
//     const listyle = {
//         listStyle: "none"
//     }

//     return (
//         <ul style={list_menu}>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">Home</a>
//                     </li>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">About</a>
//                     </li>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">Tech Stack</a>
//                     </li>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">Projects</a>
//                     </li>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">Contact</a>
//                 </li>
//         </ul>
//     )
// };
// export default Navigation;
import React, { useState } from "react";
import "./navigation.css";
const list_menu = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
             gap: '50px'
         };
         const listyle = {
             listStyle: "none"
        }

        let currentElement = null;

        function changeClass(clickedElement) {
          const elements = document.getElementsByClassName("change_color");

          if (currentElement !== null) {
            currentElement.classList.remove("new_class");
          }
        
          // Nếu phần tử được click giống với phần tử được click trước đó, gán currentElement = null
          if (currentElement === clickedElement) {
            currentElement = null;
          } else {
            // Ngược lại, thêm class "new_class" cho phần tử được click và cập nhật currentElement
            clickedElement.classList.add("new_class");
            currentElement = clickedElement;
          }
        }
      
      


  return (
    <ul style={list_menu}>
//                 <li style={listyle}>
//                     <a onClick={MyButton}  className="btn-a" href="#">Home</a>
//                     </li>
//                 <li style={listyle}>
//                     <a onClick={MyButton}  className="btn-a" href="#">About</a>
//                     </li>
//                 <li style={listyle}>
//                     <a onClick={MyButton}  className="btn-a" href="#">Tech Stack</a>
//                     </li>
//                 <li style={listyle}>
//                     <a onClick={MyButton}  className="btn-a" href="#">Projects</a>
//                     </li>
//                 <li style={listyle}>
//                     <a  onClick={MyButton} className="btn-a" href="#">Contact</a>
//                 </li>
//         </ul>
  );


export default MyButton;