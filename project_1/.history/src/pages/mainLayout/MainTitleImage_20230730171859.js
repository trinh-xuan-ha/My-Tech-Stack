
import { Component, useState } from "react";
import TitleImage from "./titleImage/TitleImage";


function MainImage() {
    const[components,setComponents] = useState([
        {
            pText: 'Đoạn text 1 của Component 1',
            h2Text: 'Đoạn text 2 của Component 1',
            buttonText: 'Nút Bấm 1',
            imageUrl: 'link-ảnh-1',
          },
          {
            text1: 'Đoạn text 1 của Component 2',
            text2: 'Đoạn text 2 của Component 2',
            buttonText: 'Nút Bấm 2',
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