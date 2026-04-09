import { Image } from "react-bootstrap";
import profile from "../assets/profile2.png";
import { useEffect, useState } from "react";

const Home = () => {

  const text = "MERN Stack Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home-sec"
      className="text-white d-flex align-items-center "
      style={{
        height: "90vh",
      }}
    >
      <div className="container text-center">
        <div
  style={{
    width: "285px",
    height: "300px",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto"
  }}
>
  <img id="profile"
    src={profile}
    alt="profile"
    style={{
      width: "100%",
      height: "145%",
      objectFit: "cover"
    }}
  />
</div>
        <h1 className="fw-bold">Hi, I'm Sanjay</h1>

        <h3 className="text-success mt-2">
          {displayText}
          <span className="blink">|</span>
        </h3>

        <p className="mt-3">
          I build modern, responsive and scalable web applications.
        </p>

      </div>

      <style>
        {`
          .blink {
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>

    </section>
  );
};

export default Home;