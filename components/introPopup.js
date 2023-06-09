import { useState } from "react";

export default function IntroPopup() {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
  };

  if (!hidden) {
    return (
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lightBlue text-offWhite border-darkBlue border-2 rounded-md p-8"
        onClick={handleClick}
      >
        <h1 className="text-xl font-bold">Welcome to Yahtzee!</h1>
        <h2 className="text-xl font-bold">Objective:</h2>
        <p>
          The objective of Yahtzee is to score the highest number of points by
          rolling five dice to make certain combinations.
        </p>
        <h2 className="text-xl font-bold">Gameplay:</h2>
        <ol className="list-decimal">
          <li>On your turn, you can roll the five dice up to three times.</li>
          <li>
            After each roll, you can choose to keep some or all of the dice and
            re-roll the rest.
          </li>
          <li>
            After the third roll or if you're satisfied with your dice, you must
            choose a category to score.
          </li>
          <li>Each category can only be used once, so choose wisely!</li>
        </ol>
        <h2 className="text-xl font-bold">Categories:</h2>
        <ol className="list-decimal">
          <li>
            Ones, Twos, Threes, Fours, Fives, Sixes: Score the total sum of dice
            showing the corresponding number.
          </li>
          <li>
            Three of a Kind: Score the total sum of all dice if you have at
            least three of the same number.
          </li>
          <li>
            Four of a Kind: Score the total sum of all dice if you have at least
            four of the same number.
          </li>
          <li>
            Full House: Score 25 points if you have three of a kind and a pair.
          </li>
          <li>
            Small Straight: Score 30 points if you have a sequence of four dice
            (1-2-3-4, 2-3-4-5, or 3-4-5-6).
          </li>
          <li>
            Large Straight: Score 40 points if you have a sequence of five dice
            (1-2-3-4-5 or 2-3-4-5-6).
          </li>
          <li>
            Yahtzee: Score 50 points if you have all five dice showing the same
            number.
          </li>
          <li>Chance: Score the total sum of all dice.</li>
          <li>
            Bonus and Upper Section: If the total score of the Upper Section
            (Ones through Sixes) is 63 or higher, you receive a bonus of 35
            points.
          </li>
        </ol>
        <h2 className="text-xl font-bold">End of the Game:</h2>
        <p> The game ends when all categories have been scored.</p>
        <button className="bg-darkerBlue hover:bg-darkBlue hover:cursor-pointer text-offWhite rounded-md px-6 py-3 mx-auto block text-lg">
          Click to Play!
        </button>
      </div>
    );
  }
}
