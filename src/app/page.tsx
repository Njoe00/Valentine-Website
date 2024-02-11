"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const yesButtonSize = count * 10 + 16;

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(count, phrases.length - 1)];
  };
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleYesClicked = () => {
    setYesClicked(true);
  };

  return (
    <main className="flex justify-center items-center">
      <div className="flex-col flex">
        <div className="flex items-center gap-4 justify-center z-0">
          {yesClicked ? (
            <>Hello</>
          ) : (
            <>
              <button
                onClick={handleYesClicked}
                className="border-2 bg-gray-200 py-4 px-8 font-bold hover:bg-green-500"
                style={{ fontSize: yesButtonSize }}
              >
                Yes
              </button>
              <button
                onClick={handleClick}
                className="border-2 bg-gray-200 py-4 px-8 font-bold hover:bg-red-500"
              >
                {count === 0 ? "No" : getNoButtonText()}
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
