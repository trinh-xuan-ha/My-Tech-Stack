"use client";
import { useParams } from "next/navigation";
const Intagram = () => {
  const handleBtn = () => {
    alert("trịnh");
  };
  return (
    <div>
      <p> đây là intagram</p>
      <button onClick={() => handleBtn()}>back home</button>
    </div>
  );
};
export default Intagram;
