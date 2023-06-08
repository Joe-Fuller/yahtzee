import Category from "./category";

export default function Scorecard({
  scorecard,
  setScorecard,
  dice,
  setRollsRemaining,
  setLocked,
  started,
  scored,
  setScored,
}) {
  function scoreCategory(event) {
    // dont let them score the starting dice
    // or score a set of dice twice
    if (!started || scored) {
      return;
    }
    // get the category name from the click
    const category = event.target.id;

    // first ensure the category hasnt already been scored (or is total or bonus)
    if (
      scorecard[category] === 0 &&
      category !== "total" &&
      category !== "bonus"
    ) {
      // make a copy of the scorecard (spread for state to update)
      const newScorecard = { ...scorecard };
      let score = 0;
      let counts = {};

      switch (category) {
        // if category is a number, just score that number
        case "aces":
          dice.forEach((die) => {
            if (die === 1) {
              score += 1;
            }
          });
          break;
        case "twos":
          dice.forEach((die) => {
            if (die === 2) {
              score += 2;
            }
          });
          break;
        case "threes":
          dice.forEach((die) => {
            if (die === 3) {
              score += 3;
            }
          });
          break;
        case "fours":
          dice.forEach((die) => {
            if (die === 4) {
              score += 4;
            }
          });
          break;
        case "fives":
          dice.forEach((die) => {
            if (die === 5) {
              score += 5;
            }
          });
          break;
        case "sixes":
          dice.forEach((die) => {
            if (die === 6) {
              score += 6;
            }
          });
          break;
        case "threeOfAKind":
          counts = {};
          dice.forEach((die) => {
            if (counts.hasOwnProperty(die)) {
              counts[die]++;
            } else {
              counts[die] = 1;
            }
          });
          Object.keys(counts).forEach((value) => {
            if (counts[value] >= 3) {
              score = dice.reduce((prev, curr) => {
                return prev + curr;
              });
            }
          });
          break;
        case "fourOfAKind":
          counts = {};
          dice.forEach((die) => {
            if (counts.hasOwnProperty(die)) {
              counts[die]++;
            } else {
              counts[die] = 1;
            }
          });
          Object.keys(counts).forEach((value) => {
            if (counts[value] >= 4) {
              score = dice.reduce((prev, curr) => {
                return prev + curr;
              });
            }
          });
          break;
        case "fullHouse":
          counts = [0, 0, 0, 0, 0, 0];
          dice.forEach((die) => {
            counts[die]++;
          });
          if (counts.includes(2) && counts.includes(3)) {
            score = 25;
          }
          break;
        case "smallStraight":
          if (
            (dice.includes(1) &&
              dice.includes(2) &&
              dice.includes(3) &&
              dice.includes(4)) ||
            (dice.includes(2) &&
              dice.includes(3) &&
              dice.includes(4) &&
              dice.includes(5)) ||
            (dice.includes(3) &&
              dice.includes(4) &&
              dice.includes(5) &&
              dice.includes(6))
          ) {
            score = 30;
          }
          break;
        case "largeStraight":
          if (
            (dice.includes(1) &&
              dice.includes(2) &&
              dice.includes(3) &&
              dice.includes(4) &&
              dice.includes(5)) ||
            (dice.includes(2) &&
              dice.includes(3) &&
              dice.includes(4) &&
              dice.includes(5) &&
              dice.includes(6))
          ) {
            score = 40;
          }
          break;
        case "yahtzee":
          let sum = dice.reduce((prev, curr) => {
            prev + curr;
          });
          if (sum === 5 * dice[0]) {
            score = 50;
          }
          break;
        case "chance":
          dice.forEach((die) => {
            score += die;
          });
          break;
      }
      // newScorecard[category] = dice.reduce((prev, curr) => prev + curr, 0);
      newScorecard[category] = score;
      newScorecard["total"] += score;
      setScorecard(newScorecard);
      setRollsRemaining(3);
      setLocked([false, false, false, false, false]);
      setScored(true);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="text-center bg-darkGreen rounded-md p-4">
        <p className="text-2xl p-4">Score</p>
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
