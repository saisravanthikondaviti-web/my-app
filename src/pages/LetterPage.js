import React, { useState, useRef, useEffect } from "react";
import "./LetterPage.css";

function LetterPage() {
  const [index, setIndex] = useState(0);
  const audioRef = useRef(null);

  const images = ["/img1.jpeg", "/img2.jpeg", "/img3.jpeg"];

  // 🎵 Auto play music once
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  // 🌸 AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="letter-page">

      {/* 🌊 BUBBLES BACKGROUND */}
      <div className="bubbles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      {/* 🎵 MUSIC */}
      <audio ref={audioRef} loop>
        <source src="/music.mpeg" type="audio/mpeg" />
      </audio>

      {/* 💌 LETTER CARD */}
      <div className="letter">

        {/* 🌸 CAROUSEL */}
        <div className="carousel-frame">
          <div className="carousel">
            <button className="nav left" onClick={prevSlide}>
              ❮
            </button>

            <img
              src={images[index]}
              alt="memory"
              className="letter-image"
            />

            <button className="nav right" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>

        {/* 🟢 DOTS */}
        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        {/* 💌 CONTENT */}
        <div className="letter-content">
          <h1>💖 The Secret</h1>

          <p>
            Between respect and a quiet affection, your care feels like a soft
            prayer I hold close.
          </p>

          <p>
            You don’t say much, yet every small effort of yours stays with me. 💕
          </p>

          <p>
            In the simplest things you do, you make me feel seen, valued…
            and gently cherished, more than you know. 💕
          </p>

          <p>- ton admirateur secret ❤️‍🩹</p>
        </div>

      </div>
    </div>
  );
}

export default LetterPage;