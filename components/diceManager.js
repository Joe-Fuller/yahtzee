import Dice from "./dice";
import { useState } from "react";

export default function DiceManager({
  dice,
  setDice,
  rollsRemaining,
  setRollsRemaining,
}) {
  const [locked, setLocked] = useState([false, false, false, false, false]);

  function rollDice() {
    if (rollsRemaining > 0) {
      for (let times = 0; times < 1000; times++) {
        setTimeout(() => {
          const newDice = [...dice];
          for (let i = 0; i < 5; i++) {
            if (!locked[i]) {
              newDice[i] = Math.floor(Math.random() * 6) + 1;
            }
          }
          setDice(newDice);
        }, 10);
      }
    }
    setRollsRemaining(rollsRemaining - 1);
  }

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
