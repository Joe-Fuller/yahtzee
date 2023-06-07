import Image from "next/image";

export default function Dice({ value, i, locked, setLocked }) {
  const path = `/dice/${value}.svg`;

  function lock() {
    const newLocked = locked;
    newLocked[i] = !locked[i];
    setLocked(newLocked);
  }

  return (
    <div className={!locked[i] ? "outline-8 outline-white" : ""} onClick={lock}>
      <Image src={path} width="100" height="100" alt={value}></Image>
    </div>
  );
}
