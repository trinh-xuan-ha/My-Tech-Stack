
import { Component, useState } from "react";
import TitleImage from "./titleImage/TitleImage";
import logo_1 from "../../assets/images/banner-home1-1-min_2048x_1.webp";
import logo_2 from "../../assets/images/banner-home1-2-min-min_2048x_2.webp";
import logo_3 from "../../assets"


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
            text1: 'WOMEN Ò SUMMER',
            text2: 'WOMEN DESSES',
            buttonText: 'show now',
            imageUrl: 'link-ảnh-3',
          },
    ])
}