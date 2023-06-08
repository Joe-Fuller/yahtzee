import Image from "next/image";

export default function Dice({ value, i, locked, setLocked }) {
  const path = `/dice/${value}.png`;

  function lock() {
    const newLocked = [...locked];
    newLocked[i] = !locked[i];
    setLocked(newLocked);
  }

  return (
    <div className={!locked[i] ? "" : "bg-red-600 rounded-xl"} onClick={lock}>
      <Image src={path} width="80" height="80" alt={value}></Image>
    </div>
  );
}
