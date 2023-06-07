import Dice from "./dice";

export default function DiceManager({ dice, setDice }) {
  function rollDice() {
    const newDice = [1, 2, 3, 4, 5];
    for (let i = 0; i < 5; i++) {
      newDice[i] = Math.floor(Math.random() * 6) + 1;
    }
    setDice(newDice);
  }

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        <div className="flex justify-center">
          {" "}
          <button className="text-3xl" onClick={rollDice}>
            Roll!
          </button>
        </div>
        <div className="flex justify-center">
          {dice.map((die, i) => {
            return <Dice key={i} value={die}></Dice>;
          })}
        </div>
      </div>
    </div>
  );
}
