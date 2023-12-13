"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const Intagram = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("../");
  };
  return (
    <div>
      <p> đây là intagram</p>
      <button onClick={() => router.push("../")}>back home</button>
      <Button>nút facebook</Button>
    </div>
  );
};
export default Intagram;
