import "./navigation.css";
function Navigation() {
    const list_menu = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px'
    };
    const listyle = {
        listStyle: "none"
    }
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const tabs = $$('.btn-a');
   // console.log(tabs);
    return (
        <ul style={list_menu}>
                <li style={listyle}>
                    <a  className="btn-a" href="#">Home</a>
                    </li>
                <li style={listyle}>
                    <a  className="btn-a" href="#">About</a>
                    </li>
                <li style={listyle}>
                    <a  className="btn-a" href="#">Tech Stack</a>
                    </li>
                <li style={listyle}>
                    <a  className="btn-a" href="#">Projects</a>
                    </li>
                <li style={listyle}>
                    <a  className="btn-a" href="#">Contact</a>
                </li>
        </ul>
    )
};
export default Navigation;

// import React, { useState } from "react";
// import "./navigation.css";

// function Navigation() {
//   const list_menu = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '50px'
//   };

//   const listyle = {
//     listStyle: "none"
//   };

//   let currentElement = null;

//   function changeClass(event) {
//     const clickedElement = event.target;

//     const elements = document.getElementsByClassName("change_color");

//     if (currentElement !== null) {
//       currentElement.classList.remove("new_class");
//     }

//     if (currentElement === clickedElement) {
//       currentElement = null;
//     } else {
//       clickedElement.classList.add("new_class");
//       currentElement = clickedElement;
//     }
  

//   return (
//     <ul style={list_menu}>
//       <li style={listyle}>
//         <a onClick={changeClass} className="btn-a" href="#">Home</a>
//       </li>
//       <li style={listyle}>
//         <a onClick={changeClass} className="btn-a" href="#">About</a>
//       </li>
//       <li style={listyle}>
//         <a onClick={changeClass} className="btn-a" href="#">Tech Stack</a>
//       </li>
//       <li style={listyle}>
//         <a onClick={changeClass} className="btn-a" href="#">Projects</a>
//       </li>
//       <li style={listyle}>
//         <a onClick={changeClass} className="btn-a" href="#">Contact</a>
//       </li>
//     </ul>
//   );
//   }
// }

// export default Navigation;