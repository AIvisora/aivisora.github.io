import React from "react";
import Marquee from "react-fast-marquee";
import "./PromptStrip.css";

const PromptStrip = () => {
  const prompts = [
    // Fitness & Anatomy
    "How to perform a wide squat and highlight the primary muscles in RED",
    "Show basic full-body stretching positions for beginners",
    "Explain how body posture affects balance during heavy deadlifts",

    // Biology & Medicine
    "Visualize how blood flow changes when arteries get blocked",
    "Show the structure of DNA with labeled components",
    "Explain how neurons communicate inside the human brain",

    // Daily Life / How-to
    "I bought a new washing machine — show me how to operate it step by step",
    "How to sit correctly on a horse with proper posture",
    "Explain how a water purifier works internally",

    // Engineering & Mechanics
    "Demonstrate how to fix two leaking pipes with correct joint alignment",
    "Explain how gears transfer motion inside a machine",
    "Show how electricity flows in a basic household circuit",

    // Sports & Education
    "Explain the rules of a tennis court with dimensions and two players playing",
    "Teach the cricket cover drive and show how body physics affects the shot",
    "Explain how a car braking system works using simple visuals",
  ];

  return (
    <div className="prompt-container">
      {[...Array(3)].map((_, rowIndex) => (
        <Marquee
          key={rowIndex}
          gradient={false}
          direction={rowIndex % 2 === 0 ? "left" : "right"}
          speed={30}
          className="marquee-row"
        >
          {prompts.map((prompt, index) => (
            <div key={index} className="prompt-box">
              {prompt}
            </div>
          ))}
        </Marquee>
      ))}
    </div>
  );
};

export default PromptStrip;
