import { useState } from "react";

export default function IntroPopup() {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
  };

  if (!hidden) {
    return (
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lightBlue text-offWhite border-darkBlue border-2 rounded-md p-4"
        onClick={handleClick}
      >
        <p>Its Yahtzee, do you need an intro?</p>
        <button>Click to Play!</button>
      </div>
    );
  }
}
