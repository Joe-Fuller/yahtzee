import Category from "./category";

export default function Scorecard() {
  return (
    <div className="text-center">
      <p>Score</p>
      <Category name="Aces"></Category>
      <Category name="Twos"></Category>
      <Category name="Threes"></Category>
      <Category name="Fours"></Category>
      <Category name="Fives"></Category>
      <Category name="Sixes"></Category>
      <Category name="Bonus"></Category>
      <Category name="Three of a kind"></Category>
      <Category name="Four of a kind"></Category>
      <Category name="Full House"></Category>
      <Category name="Small Straight"></Category>
      <Category name="Large Straight"></Category>
      <Category name="Yahtzee"></Category>
      <Category name="Chance"></Category>
      <Category name="Total"></Category>
    </div>
  );
}
