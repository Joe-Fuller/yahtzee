import Image from "next/image";

export default function Dice({ value }) {
  const path = `/dice/${value}.svg`;

  return (
    <div>
      <Image src={path} width="40" height="40" alt={value}></Image>
    </div>
  );
}
