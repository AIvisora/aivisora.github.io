import React from "react";
import Marquee from "react-fast-marquee";
import "./PromptStrip.css";

const PromptStrip = () => {
  const prompts = [
    "How to perform wide squat?",
    "How does deep learning work?",
    "how to sit on horse?",
    "how blood will transformed in our body?",
    "how to fix two pipes?",
    "A DNA structure w/t its structure",
    "Explain transformers architecture?",
    "how a human brain works with nearons",
    "show me prework out for deadlift?",
    "how tennis court look like show me w/two players playin on?",
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
