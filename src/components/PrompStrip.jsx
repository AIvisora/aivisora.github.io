import React from "react";
import Marquee from "react-fast-marquee";
import "./PromptStrip.css";

const PromptStrip = () => {
const prompts = [
  // Fitness & Anatomy
  "How to perform a wide squat and highlight the primary muscles in RED",
  "Show full-body stretching positions with posture alignment guides",
  "Explain how body posture affects balance during heavy deadlifts",
  "Visualize joint angles and muscle engagement during a proper deadlift",
  "Show center of gravity shifts during sprint acceleration",
  "Demonstrate shoulder rotation mechanics in a tennis serve",
  "Explain muscle activation during a push-up with labeled groups",
  "Show spine alignment differences between correct and incorrect posture",
  "Visualize knee tracking during a squat to prevent injury",
  "Explain hip hinge mechanics in compound lifts",
  "Show core stabilization during plank variations",
  "Demonstrate ankle mobility during running stride",
  "Visualize force transfer from legs to arms in a punch",
  "Explain balance control during single-leg exercises",
  "Show rotational torque in a baseball swing",

  // Biology & Medicine
  "Visualize how blood flow changes when arteries get blocked",
  "Show the structure of DNA with labeled components",
  "Explain how neurons communicate inside the human brain",
  "Demonstrate electrical and chemical signaling across a synapse",
  "Show oxygen exchange inside the lungs at the alveoli level",
  "Visualize plaque buildup progression inside arteries",
  "Explain how insulin regulates glucose at the cellular level",
  "Show how muscles contract at the microscopic level",
  "Visualize the immune response to a viral infection",
  "Explain how vaccines trigger antibody production",
  "Show how kidney filtration removes waste from blood",
  "Demonstrate hormone signaling between glands",
  "Visualize how the liver processes toxins",
  "Explain cell division during mitosis step by step",
  "Show neural pathway activation during memory recall",

  // Daily Life / How-to
  "I bought a new washing machine — show me how to operate it step by step",
  "How to sit correctly on a horse with proper posture and balance alignment",
  "Explain how a water purifier works internally with filtration stages",
  "Show internal components of a refrigerator and cooling cycle",
  "Demonstrate how a ceiling fan motor converts electricity into rotation",
  "Explain pressure buildup inside a pressure cooker with valve mechanics",
  "Show how microwave radiation heats food molecules",
  "Visualize the charging cycle inside a lithium-ion battery",
  "Explain how an elevator pulley system lifts weight",
  "Show how a door lock mechanism operates internally",
  "Demonstrate airflow inside an air conditioner",
  "Visualize water flow through household plumbing",
  "Explain how a gas stove ignites fuel safely",
  "Show internal parts of a mechanical wristwatch",
  "Demonstrate how a bicycle gear system shifts speeds",

  // Engineering & Mechanics
  "Demonstrate how to fix two leaking pipes with correct joint alignment",
  "Explain how gears transfer motion inside a machine",
  "Show how electricity flows in a basic household circuit",
  "Visualize torque distribution inside a gearbox",
  "Explain how a hydraulic press multiplies force step by step",
  "Show brake pad pressure and disc friction during car braking",
  "Demonstrate suspension compression over uneven terrain",
  "Explain thrust generation inside a jet engine with airflow stages",
  "Visualize piston movement inside a combustion engine",
  "Show how a differential splits torque between wheels",
  "Explain structural load distribution in a bridge",
  "Demonstrate magnetic field formation around a conductor",
  "Visualize energy conversion in a wind turbine",
  "Show how shock absorbers dampen vibrations",
  "Explain airflow over an airplane wing creating lift",

  // Sports & Education
  "Explain the rules of a tennis court with dimensions and two players playing",
  "Teach the cricket cover drive and show how body physics affects the shot",
  "Explain how a car braking system works using simple visuals",
  "Visualize bat angle and foot placement in a cricket cover drive",
  "Demonstrate ball trajectory and spin in a googly delivery",
  "Show player positioning and movement in a football formation",
  "Explain how spin affects a tennis ball bounce",
  "Visualize biomechanics of a high jump takeoff",
  "Demonstrate momentum transfer in a boxing punch",
  "Show bowling arm rotation mechanics in cricket",
  "Explain footwork patterns in badminton",
  "Visualize balance control during gymnastics landing",
  "Show stride length effects in sprint performance",
  "Demonstrate passing formations in basketball",
  "Explain racket angle impact in table tennis",

  // Systems & Concepts
  "Visualize how social media algorithms amplify content through feedback loops",
  "Explain inflation flow from central bank policy to consumer prices",
  "Show supply chain movement from raw materials to retail stores",
  "Demonstrate traffic congestion buildup using flow dynamics",
  "Visualize how blockchain validates transactions across nodes",
  "Show climate feedback loops between carbon, temperature, and oceans",
  "Explain network effects in a growing social platform",
  "Visualize capital flow inside a startup ecosystem",
  "Demonstrate information propagation in a communication network",
  "Show organizational hierarchy and decision pathways",
  "Explain how recommendation systems rank content",
  "Visualize feedback loops in economic growth models",
  "Demonstrate crowd behavior patterns in public spaces",
  "Show energy flow within a smart grid system",
  "Explain ecosystem balance between predators and prey"
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
