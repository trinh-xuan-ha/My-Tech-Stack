
import { Component, useState } from "react";
import TitleImage from "./titleImage/TitleImage";


function MainImage() {
    const[components,setComponents] = useState([
        {
            pText: 'NEW ARRIVARS',
            h2Text: 'WOMEN GLASSES',
            buttonText: 'Show now',
            imageUrl: '',
          },
          {
            text1: 'Đoạn text 1 của Component 2',
            text2: 'AUTUMN OVERCOAT',
            buttonText: 'Show now',
            imageUrl: 'link-ảnh-2',
          },
          {
            text1: 'Đoạn text 1 của Component 3',
            text2: 'Đoạn text 2 của Component 3',
            buttonText: 'Nút Bấm 3',
            imageUrl: 'link-ảnh-3',
          },
    ])
}