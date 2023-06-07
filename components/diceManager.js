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
    <div>
      <button onClick={rollDice}>Roll!</button>
      {dice.map((die, i) => {
        return <Dice key={i} value={die}></Dice>;
      })}
    </div>
  );
}
