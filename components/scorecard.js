import Category from "./category";

export default function Scorecard({ scorecard }) {
  return (
    <div className="text-center">
      <p>Score</p>
      {Object.keys(scorecard).map((name) => {
        return (
          <Category name={name} score={scorecard[name]} key={name}></Category>
        );
      })}
    </div>
  );
}
