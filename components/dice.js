import Image from "next/image";

export default function Dice({ value }) {
  const path = `/dice/${value}.svg`;

  return (
    <div>
      <Image src={path} width="100" height="100" alt={value}></Image>
    </div>
  );
}
