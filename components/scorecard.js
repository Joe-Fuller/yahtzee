import Category from "./category";

export default function Scorecard({ scorecard, setScorecard, dice }) {
  function scoreCategory(event) {
    const category = event.target.id;
    const newScorecard = { ...scorecard };
    newScorecard[category] = dice.reduce((prev, curr) => prev + curr, 0);
    setScorecard(newScorecard);
  }

  return (
    <div className="flex justify-center">
      <div className="text-center">
        <p>Score</p>
        {Object.keys(scorecard).map((name) => {
          return (
            <Category
              name={name}
              score={scorecard[name]}
              key={name}
              scoreCategory={scoreCategory}
            ></Category>
          );
        })}
      </div>
    </div>
  );
}
