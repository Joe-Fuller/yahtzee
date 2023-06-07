import Dice from "./dice";
import { useState } from "react";

export default function DiceManager({ dice, setDice }) {
  function rollDice() {
    const newDice = [1, 2, 3, 4, 5];
    for (let i = 0; i < 5; i++) {
      if (!locked[i]) {
        newDice[i] = Math.floor(Math.random() * 6) + 1;
      }
    }
    setDice(newDice);
  }

  const [locked, setLocked] = useState([false, false, false, false, false]);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        <div className="flex justify-center">
          <button className="text-3xl" onClick={rollDice}>
            Roll!
          </button>
        </div>
        <div className="flex justify-center">
          {dice.map((die, i) => {
            return (
              <Dice
                key={i}
                value={die}
                i={i}
                locked={locked}
                setLocked={setLocked}
              ></Dice>
            );
          })}
        </div>
      </div>
    </div>
  );
}
