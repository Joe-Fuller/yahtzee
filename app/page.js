import Scorecard from "@/components/scorecard";
import Dice from "@/components/dice";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-3xl">YAHTZEE</h1>
      <Scorecard></Scorecard>
      <Dice value={1}></Dice>
    </main>
  );
}
