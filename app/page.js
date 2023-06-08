"use client";

import Scorecard from "@/components/scorecard";
import DiceManager from "@/components/diceManager";
import { useState } from "react";
import IntroPopup from "@/components/introPopup";

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
  const [scored, setScored] = useState(false);
  const [beenScored, setBeenScored] = useState({
    aces: false,
    twos: false,
    threes: false,
    fours: false,
    fives: false,
    sixes: false,
    bonus: false,
    threeOfAKind: false,
    fourOfAKind: false,
    fullHouse: false,
    smallStraight: false,
    largeStraight: false,
    yahtzee: false,
    chance: false,
    total: false,
  });

  return (
    <main>
      <h1 className="text-center text-3xl">YAHTZEE</h1>
      <IntroPopup></IntroPopup>
      <Scorecard
        scorecard={scorecard}
        setScorecard={setScorecard}
        dice={dice}
        setRollsRemaining={setRollsRemaining}
        setLocked={setLocked}
        started={started}
        scored={scored}
        setScored={setScored}
        beenScored={beenScored}
        setBeenScored={setBeenScored}
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
        setScored={setScored}
      ></DiceManager>
    </main>
  );
}
