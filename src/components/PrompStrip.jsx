import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "./PromptStrip.css";

const PromptStrip = () => {
  const [pausedRow, setPausedRow] = useState(null);
  const prompts = [
    // 🧠 Biology & Medicine — WOW factor
    "Show me exactly what happens inside my brain when I fall in love",
    "Visualize a cancer cell dividing and how chemotherapy stops it",
    "Show how a single virus enters a healthy cell and hijacks it",
    "Walk me through what happens in my body during a panic attack",
    "Show the exact moment a bone fractures under impact in slow motion",
    "Visualize how Alzheimer's destroys neural connections over 10 years",
    "Show how a surgeon repairs a torn ACL step by step in 3D",
    "Demonstrate how a heart attack happens inside a blocked artery",
    "Visualize how anesthesia puts the brain to sleep at the molecular level",
    "Show how a kidney stone forms and travels through the body",

    // ⚡ Physics & Engineering — Mind-bending
    "Show me why a bridge doesn't collapse under 10,000 cars",
    "Visualize what actually happens inside a nuclear reactor core",
    "Show how a black hole bends spacetime around it",
    "Demonstrate how a earthquake wave travels through the Earth's crust",
    "Show the exact moment a lightning bolt forms between cloud and ground",
    "Visualize how a Formula 1 car generates downforce at 300 km/h",
    "Show what happens inside a jet engine during takeoff thrust",
    "Demonstrate how a tsunami builds from an underwater earthquake",
    "Visualize how a bullet travels through ballistic gel in slow motion",
    "Show how a skyscraper sways in wind without falling",

    // 🌍 Daily Life — Instantly relatable
    "Show me exactly how my Wi-Fi signal travels through walls to my phone",
    "Visualize what happens inside my stomach when I eat junk food",
    "Show how my car engine starts from key turn to first combustion",
    "Demonstrate what happens inside my phone battery as it dies",
    "Show how traffic jams form even when nobody causes an accident",
    "Visualize how a lie detector reads stress in the human body",
    "Show what my spine looks like after 8 hours of sitting at a desk",
    "Demonstrate how fingerprint scanners read unique patterns",
    "Show how noise-cancelling headphones eliminate sound waves",
    "Visualize what happens to my lungs after one cigarette",

    // 🏛️ History & Events — Storytelling
    "Reconstruct the Battle of Thermopylae with 300 Spartans in 3D",
    "Show how the Egyptian pyramids were built block by block",
    "Visualize the moment the Titanic splits and sinks in real time",
    "Demonstrate how the Apollo 11 lunar module landed on the moon",
    "Show how the Roman Colosseum looked on gladiator fight day",
    "Reconstruct how Pompeii was buried by Mount Vesuvius eruption",
    "Visualize how D-Day Normandy beach landing was coordinated",
    "Show how the Berlin Wall fell and people crossed in 1989",

    // 💡 Concepts & Systems — Eye-opening
    "Show how compound interest turns $1000 into $1M over 40 years",
    "Visualize how misinformation spreads across a social network in hours",
    "Show what happens to plastic after you throw it in the ocean",
    "Demonstrate how a democratic election gets manipulated through gerrymandering",
    "Visualize how global supply chains broke during COVID-19",
    "Show how a startup grows from 2 people to 2000 in an org chart",
    "Demonstrate how inflation silently eats your savings over 20 years",
    "Show how a coral reef ecosystem collapses from rising temperatures",

    // 🚀 Space & Future — Aspirational
    "Show what it looks like to land on Mars in a SpaceX Starship",
    "Visualize how a wormhole would connect two points in spacetime",
    "Show how solar panels on a house generate and store electricity",
    "Demonstrate how a self-driving car sees the road using sensors",
    "Visualize what the inside of a fusion reactor looks like at ignition",
    "Show how quantum computing processes information differently than classical",
    "Demonstrate how CRISPR cuts and edits a strand of DNA",
    "Show what happens inside a lithium battery at the atomic level",
  ];
  return (
    <div className="prompt-container">
      {[...Array(3)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          onMouseEnter={() => setPausedRow(rowIndex)}
          onMouseLeave={() => setPausedRow(null)}
        >
          <Marquee
            gradient={false}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            speed={30}
            play={pausedRow !== rowIndex}
            className="marquee-row"
          >
            {prompts.map((prompt, index) => (
              <div key={index} className="prompt-box">
                {prompt}
              </div>
            ))}
          </Marquee>
        </div>
      ))}
    </div>
  );
};

export default PromptStrip;
