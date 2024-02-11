"use client";
import { useState } from "react";
import Image from "next/image";
import { isAbsolute } from "path";

export default function Home() {
  const [count, setCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const yesButtonSize = count * 10 + 16;
  const limitCount = Math.min(count, 15 - 1);

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "You srs fam?",
      "Man, don't make me beg.",
      "We can go out for some fried chickies",
      "Please dont do me dirty",
      "I rented this and everything",
      "Imma have to get my deposit back, plz",
      "Bra",
      "Fam please",
      "Pookie",
      "Sweetie",
      "My lil snooker doodle pie",
      "FINE, see if I can care HMPF!",
      "Yall gonna make me cry",
      "My anime villian arch starts now",
    ];
    return phrases[Math.min(limitCount)];
  };

  const noButtonStylings = [
    { src: "/pussy_in_boots.gif", position: "block" },
    {
      position: "absolute",
      top: 0,
      right: 0,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "absolute",
      bottom: 0,
      right: 0,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "absolute",
      bottom: 0,
      left: 0,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "absolute",
      top: 0,
      left: 0,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "absolute",
      top: "24%",
      left: "40%",
      right: "40%",
      src: "/pussy_in_boots.gif",
    },
    {
      position: "absolute",
      top: "59%",
      left: "40%",
      right: "40%",
      src: "/pussy_in_boots.gif",
    },
    {
      position: "block",
      top: "auto",
      left: "auto",
      right: "auto",
      padding: 25,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "block",
      top: "auto",
      left: "auto",
      right: "auto",
      padding: 15,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "block",
      top: "auto",
      left: "auto",
      right: "auto",
      padding: 10,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "block",
      top: "auto",
      left: "auto",
      right: "auto",
      padding: 5,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "block",
      top: "auto",
      left: "auto",
      right: "auto",
      padding: 0,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "block",
      top: "auto",
      left: "auto",
      right: "auto",
      padding: 106,
      fontSize: 45,
      src: "/pussy_in_boots.gif",
    },
    {
      position: "block",
      top: "auto",
      left: "auto",
      right: "auto",
      src: "/fma_roy_crying.webp",
    },
    {
      position: "block",
      top: "auto",
      left: "auto",
      right: "auto",
      src: "/konosuba_evil.gif",
    },
  ];
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleYesClicked = () => {
    setYesClicked(true);
  };

  return (
    <main className="flex justify-center items-center relative">
      <div className="flex-col flex">
        <div className="flex items-center gap-4 justify-center z-0">
          {yesClicked ? (
            <div className="flex items-center justify-normal flex-col">
              <Image
                src="/love-always-wins.png"
                width={100}
                height={100}
                alt="alt"
              />
              <span className="text-4xl font-bold">UwU</span>
            </div>
          ) : (
            <div className="flex-col flex justify-center items-center">
              <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
              <Image
                className="mb-10 z-10"
                src={noButtonStylings[limitCount].src}
                width={400}
                height={400}
                alt="pussy in boots smoulder"
              />
              <div>
                <button
                  onClick={handleYesClicked}
                  className="bg-gray-200 py-4 px-8 font-bold hover:bg-green-500"
                  style={{ fontSize: yesButtonSize }}
                >
                  Yes
                </button>
                <button
                  onClick={handleClick}
                  className="bg-gray-200 py-4 px-8 font-bold hover:bg-red-500 z-0 text-nowrap text-center"
                  style={
                    {
                      position: noButtonStylings[limitCount].position,
                      top: noButtonStylings[limitCount].top,
                      right: noButtonStylings[limitCount].right,
                      bottom: noButtonStylings[limitCount].bottom,
                      left: noButtonStylings[limitCount].left,
                      padding: noButtonStylings[limitCount].padding,
                      fontSize: noButtonStylings[limitCount].fontSize,
                    } as React.CSSProperties
                  }
                >
                  {count === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
