"use client";

import Scorecard from "@/components/scorecard";
import DiceManager from "@/components/diceManager";
import { useState } from "react";

export default function Home() {
  const [dice, setDice] = useState([6, 6, 6, 6, 6]);
  const [scorecard, setScorecard] = useState({
    aces: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    bonus: 0,
    threeOfAKind: 0,
    fourOfAKind: 0,
    fullHouse: 0,
    smallStraight: 0,
    largeStraight: 0,
    yahtzee: 0,
    chance: 0,
    total: 0,
  });
  const [rollsRemaining, setRollsRemaining] = useState(3);
  const [locked, setLocked] = useState([false, false, false, false, false]);
  const [started, setStarted] = useState(false);

  return (
    <main>
      <h1 className="text-center text-3xl">YAHTZEE</h1>
      <Scorecard
        scorecard={scorecard}
        setScorecard={setScorecard}
        dice={dice}
        setRollsRemaining={setRollsRemaining}
        setLocked={setLocked}
        started={started}
      ></Scorecard>
      <DiceManager
        dice={dice}
        setDice={setDice}
        rollsRemaining={rollsRemaining}
        setRollsRemaining={setRollsRemaining}
        locked={locked}
        setLocked={setLocked}
        started={started}
        setStarted={setStarted}
      ></DiceManager>
    </main>
  );
}
