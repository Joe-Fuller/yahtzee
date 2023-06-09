export default function Category({ name, score, scoreCategory, beenScored }) {
  function title(word) {
    let output = word.slice(0, 1).toUpperCase();
    for (let i = 1; i < word.length - 1; i++) {
      output += word[i];
      if (word[i + 1].toUpperCase() === word[i + 1]) {
        output += " ";
      }
    }
    output += word[word.length - 1];
    return output;
  }

  return (
    <div className="grid grid-cols-2 p-1">
      <p>{title(name)}</p>
      <p
        onClick={scoreCategory}
        id={name}
        className={
          beenScored[name] || name === "bonus"
            ? "text-center"
            : "text-center hover:bg-lightGreen cursor-pointer"
        }
      >
        {beenScored[name] ? score : ""}
      </p>
    </div>
  );
}
