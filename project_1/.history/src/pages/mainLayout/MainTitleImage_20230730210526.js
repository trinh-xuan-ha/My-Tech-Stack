
import { Component, useState } from "react";
import TitleImage from "./titleImage/TitleImage";
import logo_1 from "../../assets/images/"


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