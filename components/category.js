export default function Category({ name, score, scoreCategory }) {
  return (
    <div className="grid grid-cols-2">
      <p>{name}</p>
      <p onClick={scoreCategory} id={name}>
        {score}
      </p>
    </div>
  );
}
