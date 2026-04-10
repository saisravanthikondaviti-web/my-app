import React, { useState } from "react";
import "./Envelope.css";

function Envelope({ onClick }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);

    setTimeout(() => {
      onClick(); // open modal after animation
    }, 500);
  };

  return (
    <div className="envelope-container" onClick={handleClick}>
      <div className={`envelope ${open ? "open" : ""}`}>
        <div className="flap"></div>
        <div className="body"></div>
        <div className="lock">🔒</div>
      </div>
    </div>
  );
}

export default Envelope;