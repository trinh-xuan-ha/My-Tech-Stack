"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
const Intagram = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("../");
  };
  return (
    <div>
      <p> đây là intagram</p>
      <button onClick={() => router.push("../")}>back home</button>
    </div>
  );
};
export default Intagram;
