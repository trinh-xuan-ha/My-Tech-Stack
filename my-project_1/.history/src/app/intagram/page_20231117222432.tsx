"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
const Intagram = () => {
  const handleBtn = () => {
    const router = useRouter();
    router.push("../");
  };
  return (
    <div>
      <p> đây là intagram</p>
      <button onClick={() => handleBtn()}>back home</button>
    </div>
  );
};
export default Intagram;
