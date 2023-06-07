export default function Dice(value) {
  const path = `../images/dice/${value}.svg`;

  return (
    <div>
      <Image src={path}></Image>
    </div>
  );
}
