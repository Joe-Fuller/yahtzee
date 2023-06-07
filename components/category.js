export default function Category({ name, score }) {
  return (
    <div className="grid grid-cols-2">
      <p>{name}</p>
      <p>{score}</p>
    </div>
  );
}
