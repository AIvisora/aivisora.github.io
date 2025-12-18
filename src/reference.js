// src/App.js

import "./App.css";
import PromptStrip from "./components/PrompStrip";
import React, { useEffect, useState } from "react";

const [scrolled, setScrolled] = useState(false);

React.useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

function App() {
  return (
    <div className="app-layout">
      {/* LEFT FIXED STRIPE */}
      <aside className={`left-strip ${scrolled ? "scrolled" : ""}`}>
        <span className="strip-title">AIvisora</span>

        <img
          src="/Images/main-logo.png"
          alt="AIvisora Logo"
          className="strip-logo"
        />
      </aside>
      {/* MAIN CONTENT (UNCHANGED SECTIONS) */}
      <main className="main-content">
        <div className="container">
          {/* Header Section */}
          <header className="AppHeader">
            <div className="trial">
              <img
                className="mainLogo"
                src="/Images/main-logo.png"
                alt="logo near headings"
              />
              <img
                className="mainLogo"
                src="/Images/trial.png"
                alt="logo near headings"
              />
            </div>
            <h1>AIvisora</h1>
            <p className="AppHeaderP1">3D Solutions to all visualization....</p>
            <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
              <PromptStrip />
            </div>
            <p className="AppHeaderP2">
              Visiualize , brainstorms and explores ideas with you
            </p>
            <a href="#about" className="Link">
              Learn more about visualizing with AIvisora
            </a>
          </header>

          {/* About Section */}
          <section id="about" className="section">
            <div>
              <h1 className="SectionHeader">About</h1>
              <p id="light">
                There are lot of problem we face in our life which just need
                visualization... we are here to help out for that you need to
                just talk w/t it.
              </p>
              <p className="InsideSectionHeading">
                AIvisora platforms helps you by providing interactive real time
                3D visualtization interface paired w/the AI driven characters.
              </p>
              <img
                id="Architecture"
                src="/Images/Architecture.png"
                alt="Architecture Image"
              />
              <p className="InsideSectionBoldness">
                Architecture we designed to build our first basic prototype{" "}
              </p>
              {/*
          <a href="#features" className="NextPageLinks">
            <img src="/Images/down-arrow.png" />
          </a>*/}
            </div>
          </section>

          {/* features Section */}
          <section id="features" className="section">
            <h2>Our Features</h2>
            <div className="feature-grid">
              <div className="feature">
                <h3>3D interactive environment</h3>
                <p>
                  we will provide an Interface where you can Interact and
                  Control things which will help you to understand the
                  Visulization
                </p>
              </div>
              <div className="feature">
                <h3>3D Avatars</h3>
                <p>A 3D avtar will be there to explain the entered prompt</p>
              </div>
              <div className="feature">
                <h3>Visiualize and grasp w/t your mind</h3>
                <p>
                  Some promts need visualization.Our AItutor will provide that
                  visualization
                </p>
              </div>
            </div>
          </section>

          {/*
      <section id="testimonials" className="section">
        <h2>What Users Say</h2>
        <div className="testimonial">
          <p>
            "AItutor changed the way I learn. It's interactive and engaging!"
          </p>
          <span>- John Doe</span>
        </div>
        <div className="testimonial">
          <p>"The AI adapts to my pace, making learning so much easier!"</p>
          <span>- Jane Smith</span>
        </div>
      </section>
      */}
          {/* Contact Section */}
          <section id="contact" className="section">
            <h2>Contact Us</h2>
            <p>
              Email us at <strong>aitutorhq@gmail.com</strong> for any queries.
            </p>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p>&copy; 2025 AItutor Inc. All Rights Reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
