"use client";

import Scorecard from "@/components/scorecard";
import DiceManager from "@/components/diceManager";
import { useState } from "react";

export default function Home() {
  const [dice, setDice] = useState([1, 2, 3, 4, 5]);

  return (
    <main>
      <h1 className="text-center text-3xl">YAHTZEE</h1>
      <Scorecard></Scorecard>
      <DiceManager dice={dice} setDice={setDice}></DiceManager>
    </main>
  );
}
