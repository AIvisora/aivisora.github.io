// src/App.js
import "./App.css";
import PromptStrip from "./components/PrompStrip";
import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "use-cases", label: "Use Cases" },
    { id: "contact", label: "Contact" },
  ];

  const handleFeatureClick = (featureName) => {
    console.log(`Feature clicked: ${featureName}`);
    alert(`Coming soon: ${featureName} demo`);
  };

  // EmailJS form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    // EmailJS configuration - YOUR CREDENTIALS
    const serviceID = "service_ndt7xsz";
    const templateID = "template_grz5jy7";
    const publicKey = "IEnxjZ-MHdM0jmlPz";

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setFormStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        formRef.current.reset();
        setIsSubmitting(false);
      },
      (error) => {
        console.error("Email send failed:", error.text);
        setFormStatus({
          type: "error",
          message:
            "Failed to send message. Please try again or email us directly.",
        });
        setIsSubmitting(false);
      }
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-layout">
      {/* LEFT STRIP */}
      <aside className="left-strip">
        <div className={`strip-brand ${scrolled ? "scrolled" : ""}`}>
          <span className="brand-text">AIvisora</span>
          <img
            src="/Images/main-logo.png"
            alt="AIvisora"
            className="brand-logo"
          />
        </div>

        <nav className="strip-nav">
          {sections.map((section) => (
            <a
              key={section.id}
              href={section.id === "home" ? "#" : `#${section.id}`}
              className="strip-link"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <div className="container">
          {/* HERO */}
          <header className="AppHeader">
            <h1>AIvisora</h1>
            <p className="AppHeaderP1">3D Solutions to all visualization…</p>
            <PromptStrip />
            <p className="AppHeaderP2">
              Visualize, brainstorm, and explore ideas with you
            </p>
            <a href="#about" className="Link">
              Learn more about visualizing with AIvisora
            </a>
          </header>

          {/* ABOUT - ENHANCED PIPELINE */}
          <section id="about" className="about-section">
            <div className="about-inner">
              {/* Hero text with accent line */}
              <p className="about-hero-text">
                Platforms helps you by providing interactive real time 3D
                visualization interface paired w/the AI driven characters and
                Avatars{" "}
              </p>

              {/* Enhanced Pipeline with numbered steps */}
              <div className="about-pipeline">
                <div className="pipeline-line"></div>

                <div className="pipeline-card" data-step="01">
                  <h3>Enter the Prompt</h3>
                  <p>
                    Describe what you want to visualize as a scene, using
                    natural language.
                  </p>
                </div>

                <div className="pipeline-card" data-step="02">
                  <h3>Preparing the Scene</h3>
                  <p>
                    AI chooses the right avatars, objects, and structure needed
                    to build the scene.
                  </p>
                </div>

                <div className="pipeline-card" data-step="03">
                  <h3>Visualization</h3>
                  <p>
                    A real-time 3D interface where you can interact with visuals
                    and audio.
                  </p>
                </div>

                <div className="pipeline-card" data-step="04">
                  <h3>Explore</h3>
                  <p>
                    Continue learning by turning it into a session and exploring
                    further.
                  </p>
                </div>

                <div className="pipeline-card" data-step="05">
                  <h3>Simplicity</h3>
                  <p>
                    Easy to use, designed to solve everyday visualization
                    problems effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section id="features" className="section features-section">
            <h2 className="features-title">Core Features</h2>

            <div className="features-grid two-column">
              <div
                className="feature-card"
                onClick={() =>
                  handleFeatureClick("Unreal Engine – Powered Scenes")
                }
              >
                <img src="/Images/feature2.svg" alt="Unreal Engine" />
                <div className="feature-content">
                  <h3>Unreal Engine – Powered Scenes</h3>
                  <p>
                    High-fidelity real-time environments with proper physics and
                    cinematic lighting.
                  </p>
                  <span className="feature-meta">AIvisora · Core</span>
                </div>
              </div>

              <div
                className="feature-card"
                onClick={() => handleFeatureClick("Prompts to Scenes")}
              >
                <img src="/Images/feature1.svg" alt="Text to 3D" />
                <div className="feature-content">
                  <h3>Prompts to Scenes</h3>
                  <p>
                    Convert natural language prompts into structured 3D scenes
                    with objects, layout, and logic.
                  </p>
                  <span className="feature-meta">AIvisora · Core</span>
                </div>
              </div>

              <div
                className="feature-card"
                onClick={() => handleFeatureClick("Real-Time Interface")}
              >
                <img src="/Images/feature3.svg" alt="AI Vision" />
                <div className="feature-content">
                  <h3>Real-Time Interface</h3>
                  <p>
                    Control Everything via an intuitive 3D interface. Real time
                    talking w/t AI avatar for more understanding.
                  </p>
                  <span className="feature-meta">AIvisora · Core</span>
                </div>
              </div>

              <div
                className="feature-card"
                onClick={() =>
                  handleFeatureClick("Interactive Learning Controls")
                }
              >
                <img src="/Images/feature4.svg" alt="Interactive Controls" />
                <div className="feature-content">
                  <h3>Interactive Learning Controls</h3>
                  <p>
                    Rotate, zoom, isolate, and explore objects dynamically
                    instead of static diagrams.
                  </p>
                  <span className="feature-meta">AIvisora · Core</span>
                </div>
              </div>

              <div
                className="feature-card"
                onClick={() => handleFeatureClick("AI-Guided Explanations")}
              >
                <img src="/Images/feature5.svg" alt="AI Explanations" />
                <div className="feature-content">
                  <h3>AI-Guided Explanations</h3>
                  <p>
                    Context-aware AI avatars explain concepts directly inside
                    the 3D scene.
                  </p>
                  <span className="feature-meta">AIvisora · Core</span>
                </div>
              </div>

              <div
                className="feature-card"
                onClick={() => handleFeatureClick("Create Sessions")}
              >
                <img src="/Images/feature6.svg" alt="Sessions" />
                <div className="feature-content">
                  <h3>Create Sessions</h3>
                  <p>
                    Save and continue your learning journey with persistent
                    interactive sessions.
                  </p>
                  <span className="feature-meta">AIvisora · Core</span>
                </div>
              </div>
            </div>
          </section>

          {/* USE CASES */}
          <section id="use-cases" className="section usecases-section">
            <h2 className="usecases-title">
              Any task that benefits from seeing instead of reading — we serve.
            </h2>

            <div className="usecases-grid">
              <a href="#" className="usecase-card">
                <img
                  src="/Images/usecase3.png"
                  alt="Learning & Education"
                />
                <div className="usecase-content">
                  <h3>Learning & Education</h3>
                  <p>
                    Understand biology, physics, chemistry, and math through
                    interactive 3D visualization instead of static explanations.
                  </p>
                </div>
              </a>

              <a href="#" className="usecase-card">
                <img src="/Images/usecase4.png" alt="Medical & Health" />
                <div className="usecase-content">
                  <h3>Medical & Health</h3>
                  <p>
                    Visualize anatomy, procedures, and disease progression
                    before real medical decisions are made.
                  </p>
                </div>
              </a>

              <a href="#" className="usecase-card">
                <img
                  src="/Images/usecase2.png"
                  alt="Engineering & Labs"
                />
                <div className="usecase-content">
                  <h3>Engineering & Labs</h3>
                  <p>
                    Explore machines, lab setups, and internal mechanisms safely
                    through interactive 3D scenes.
                  </p>
                </div>
              </a>

              <a href="#" className="usecase-card">
                <img src="/Images/usecase5.png" alt="Daily Life & Work" />
                <div className="usecase-content">
                  <h3>Daily Life & Work</h3>
                  <p>
                    Learn how things work — from appliances to tools — by seeing
                    and interacting, not reading manuals.
                  </p>
                </div>
              </a>

              <a href="#" className="usecase-card">
                <img src="/Images/usecase1.png" alt="Design & Creation" />
                <div className="usecase-content">
                  <h3>Design & Creation</h3>
                  <p>
                    Visualize architectural spaces, props, and creative ideas
                    directly in 3D before building them.
                  </p>
                </div>
              </a>

              <a href="#" className="usecase-card">
                <img src="/Images/feature6.svg" alt="Sports & Movement" />
                <div className="usecase-content">
                  <h3>Sports & Movement</h3>
                  <p>
                    Understand body mechanics, movement, and technique through
                    visual breakdowns and interaction.
                  </p>
                </div>
              </a>
            </div>
          </section>

          {/* CONTACT WITH EMAILJS */}
          <section id="contact" className="section contact-section">
            <h2>Get in Touch</h2>
            <div className="contact-card">
              <p className="contact-intro">
                Interested in AIvisora, collaboration, or early access? Send us
                a message!
              </p>

              <form
                ref={formRef}
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <input name="user_name" placeholder="Your name" required />
                <input
                  name="user_email"
                  type="email"
                  placeholder="Your email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  required
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>

              {formStatus.message && (
                <div className={`form-message ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
            </div>
          </section>

          <footer className="footer">
            <p>© 2025 AIvisora. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
