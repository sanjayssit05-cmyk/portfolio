import { Link } from "react-router-dom";
import profile from "../assets/profile2.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const indiaTime = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(currentTime);

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const handlePortraitMove = (event) => {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontalPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
    const verticalPosition = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--portrait-rotate-x", `${verticalPosition * -8}deg`);
    event.currentTarget.style.setProperty("--portrait-rotate-y", `${horizontalPosition * 8}deg`);
  };

  const resetPortrait = (event) => {
    event.currentTarget.style.setProperty("--portrait-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--portrait-rotate-y", "0deg");
  };

  return (
    <section id="home-sec" className="home-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
          <h1>MERN stack<br /><span>developer</span><i>.</i></h1>
          <p className="hero-intro">
            Hey, I&apos;m <strong>Sanjay</strong>. I build thoughtful digital experiences,
            from the first pixel to the final API.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/project">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="button-text" to="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-stack">
            <span>SELECTED TOOLKIT</span>
            <p>React <b>/</b> Node.js <b>/</b> MongoDB <b>/</b> JavaScript</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame" onPointerMove={handlePortraitMove} onPointerLeave={resetPortrait}>
            <img src={profile} alt="Portrait of Sanjay" />
            <span className="portrait-index">SANJAY / MERN STACK</span>
          </div>
          <div className="hero-sticker" aria-label="Based in India">
            <span>BUILDING</span><strong>for the<br />better web</strong><i>✳</i>
          </div>
          <div className="hero-meta">
            <p className="hero-caption">CREATIVE THINKING. CLEAN CODE.</p>
            <p className="local-time">
              <span className="status-dot" />
              <span>LIVE IN INDIA</span>
              <time dateTime={currentTime.toISOString()}>{indiaTime} IST</time>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>PORTFOLIO / 2026</span>
        <span>SCROLL TO EXPLORE <b aria-hidden="true">↓</b></span>
      </div>
    </section>
  );
};

export default Home;