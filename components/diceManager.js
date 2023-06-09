import Dice from "./dice";

export default function DiceManager({
  dice,
  setDice,
  rollsRemaining,
  setRollsRemaining,
  locked,
  setLocked,
  started,
  setStarted,
  setScored,
}) {
  function rollDice() {
    if (!started) {
      setStarted(true);
    }
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
    setScored(false);
  }

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        <div className="flex justify-center">
          <button
            className="text-3xl bg-lightGreen rounded-md p-4"
            onClick={rollDice}
          >
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
        <div className="flex justify-center">
          Rolls Remaining: {rollsRemaining}
        </div>
        <div className="flex justify-center">
          {rollsRemaining === 0 ? "Out of Rolls! Score your dice" : ""}
        </div>
      </div>
    </div>
  );
}
