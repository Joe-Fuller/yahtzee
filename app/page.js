"use client";

import Scorecard from "@/components/scorecard";
import Dice from "@/components/dice";
import DiceManager from "@/components/diceManager";
import { useState } from "react";

export default function Home() {
  const [dice, setDice] = useState([1, 2, 3, 4, 5]);

  return (
    <main>
      <h1 className="text-center text-3xl">YAHTZEE</h1>
      <Scorecard></Scorecard>
      <Dice value={1}></Dice>
      <DiceManager dice={dice} setDice={setDice}></DiceManager>
    </main>
  );
}
