import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import profile from "../assets/profile2.png";
import { useEffect, useRef, useState } from "react";

const TITLE = "MERN Stack Developer";
const FIRST_LINE_LENGTH = "MERN Stack".length;
const QUICK_QUESTIONS = ["What skills do you have?", "Show me your projects", "How can I contact you?"];

const getChatReply = (question) => {
  const text = question.toLowerCase();

  if (/(skill|tech|stack|திறமை|தெரியும்)/.test(text)) {
    return "Sanjay works with React, JavaScript, HTML, CSS, Node.js, Express, MongoDB and jQuery.";
  }
  if (/(project|work|portfolio|ப்ராஜெக்ட்|வேலை)/.test(text)) {
    return "Featured work includes Food Delivery, Hospital Management, Education, Banking Management and a Calculator. Select “Explore my work” to see the project links.";
  }
  if (/(contact|email|hire|talk|தொடர்பு|வேலைக்கு)/.test(text)) {
    return "You can reach Sanjay from the Contact page. Use “Let's talk” or the contact form to send a message via WhatsApp.";
  }
  if (/(who|about|சஞ்சய்|யார்|உங்களை)/.test(text)) {
    return "Sanjay is a MERN Stack Developer based in India, focused on building responsive, user-friendly web applications.";
  }
  if (/(where|location|india|எங்கு|இருக்கிறீர்கள்)/.test(text)) {
    return "Sanjay is based in India.";
  }

  return "I can help with Sanjay's skills, projects, background or contact details. Try one of the suggested questions.";
};

const Home = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", text: "Hi! I’m Sanjay’s portfolio assistant. What would you like to know?" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatInputRef = useRef(null);
  const chatMessagesRef = useRef(null);
  const chatButtonRef = useRef(null);
  const [typedTitle, setTypedTitle] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? TITLE : ""
  );
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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let characterIndex = 0;
    let isDeleting = false;
    let timer;

    const animateTitle = () => {
      characterIndex += isDeleting ? -1 : 1;
      setTypedTitle(TITLE.slice(0, characterIndex));

      if (characterIndex === TITLE.length) {
        isDeleting = true;
        timer = window.setTimeout(animateTitle, 1200);
        return;
      }

      if (characterIndex === 0) {
        isDeleting = false;
        timer = window.setTimeout(animateTitle, 350);
        return;
      }

      timer = window.setTimeout(animateTitle, isDeleting ? 55 : 95);
    };

    timer = window.setTimeout(animateTitle, 350);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isChatOpen) return undefined;

    chatInputRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsChatOpen(false);
        chatButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isChatOpen]);

  useEffect(() => {
    if (isChatOpen && chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages, isChatOpen]);

  const sendChatMessage = (message) => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    setChatMessages((messages) => [
      ...messages,
      { role: "user", text: trimmedMessage },
      { role: "assistant", text: getChatReply(trimmedMessage) },
    ]);
    setChatInput("");
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();
    sendChatMessage(chatInput);
  };

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
          <h1 aria-label="MERN Stack Developer">
            <span
              className={`typed-title${typedTitle.length <= FIRST_LINE_LENGTH ? " is-typing" : ""}`}
              aria-hidden="true"
            >
              {typedTitle.slice(0, FIRST_LINE_LENGTH)}
            </span>
            <br />
            <span
              className={`typed-title${typedTitle.length > FIRST_LINE_LENGTH ? " is-typing" : ""}`}
              aria-hidden="true"
            >
              {typedTitle.length > FIRST_LINE_LENGTH ? TITLE.slice(FIRST_LINE_LENGTH + 1, typedTitle.length) : ""}
            </span>
            <i>.</i>
          </h1>
          <p className="hero-intro">
            I&apos;m <strong>Sanjay</strong>, a MERN stack developer building reliable,
            user-focused web applications from the first interface to the final API.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/project">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="button-text" to="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-stack">
            <span>SELECTED TOOLKIT</span>
            <p>React <b>/</b> Node.js <b>/</b> MongoDB <b>/</b> JavaScript</p>
          </div>
          <nav className="hero-socials" aria-label="Social profiles">
            <a href="https://www.linkedin.com/in/sanjay-k-044367392" target="_blank" rel="noopener noreferrer" aria-label="Open Sanjay's LinkedIn profile">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.6H2.1V22h3.1V8.6ZM3.65 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM22 14.3c0-4-2.1-5.9-4.9-5.9a4.2 4.2 0 0 0-3.8 2.1V8.6h-3.1V22h3.1v-7.4c0-2 .4-3.9 2.8-3.9s2.4 2.2 2.4 4V22H22v-7.7Z" /></svg>
            </a>
            <a href="https://www.instagram.com/its_k_s.j/" target="_blank" rel="noopener noreferrer" aria-label="Open Sanjay's Instagram profile">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="social-icon-dot" cx="17.5" cy="6.7" r=".8" /></svg>
            </a>
          </nav>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame" onPointerMove={handlePortraitMove} onPointerLeave={resetPortrait}>
            <img src={profile} alt="Portrait of Sanjay" />
            <span className="portrait-index">SANJAY / MERN STACK</span>
          </div>
          <button
            ref={chatButtonRef}
            className={`portfolio-chat-toggle${isChatOpen ? " is-open" : ""}`}
            type="button"
            aria-label={isChatOpen ? "Close portfolio chat" : "Open portfolio chat"}
            aria-expanded={isChatOpen}
            aria-controls="portfolio-chat-panel"
            onClick={() => setIsChatOpen((open) => !open)}
          >
            {isChatOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.4-.76L4 20l1.18-4.1A7.47 7.47 0 0 1 5 13.5 7.5 7.5 0 1 1 20 11.5Z" />
                <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
              </svg>
            )}
            {!isChatOpen && <span className="chat-toggle-pulse" aria-hidden="true" />}
          </button>
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
      {isChatOpen && createPortal(
        <section
          id="portfolio-chat-panel"
          className="portfolio-chat-panel"
          role="dialog"
          aria-label="Sanjay's portfolio assistant"
        >
          <header className="portfolio-chat-header">
            <span className="chat-avatar" aria-hidden="true">Ks</span>
            <span className="chat-header-copy">
              <strong>Portfolio assistant</strong>
              <small><span className="status-dot" /> Here to help</small>
            </span>
            <button
              className="chat-close"
              type="button"
              aria-label="Close chat"
              onClick={() => {
                setIsChatOpen(false);
                chatButtonRef.current?.focus();
              }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </header>
          <div className="portfolio-chat-messages" ref={chatMessagesRef} aria-live="polite">
            {chatMessages.map((message, index) => (
              <p className={`chat-message is-${message.role}`} key={`${message.role}-${index}`}>
                {message.text}
              </p>
            ))}
            {chatMessages.length === 1 && (
              <div className="chat-quick-questions" aria-label="Suggested questions">
                {QUICK_QUESTIONS.map((question) => (
                  <button type="button" key={question} onClick={() => sendChatMessage(question)}>
                    {question}
                  </button>
                ))}
              </div>
            )}
          </div>
          <form className="portfolio-chat-form" onSubmit={handleChatSubmit}>
            <label className="visually-hidden" htmlFor="portfolio-chat-input">Ask about Sanjay</label>
            <input
              ref={chatInputRef}
              id="portfolio-chat-input"
              type="text"
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              placeholder="Ask about skills or projects..."
              autoComplete="off"
            />
            <button type="submit" aria-label="Send message" disabled={!chatInput.trim()}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" /></svg>
            </button>
          </form>
          <p className="chat-disclaimer">Portfolio FAQ · No external AI service</p>
        </section>,
        document.body
      )}
      <div className="hero-bottom container">
        <span>PORTFOLIO / 2026</span>
        <span>SCROLL TO EXPLORE <b aria-hidden="true">↓</b></span>
      </div>
    </section>
  );
};

export default Home;
