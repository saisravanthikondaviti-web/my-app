import React, { useState } from "react";
import Envelope from "../components/Envelope";
import PasswordModal from "../components/PasswordModal";
import "./Home.css";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="home">
      {/* 🌫️ Dark Romantic Background */}
      <div className="overlay"></div>

      {/* 📜 Letter Style Container */}
      <div className="letter-container">
        <h1 className="title">Dear Professor.. 💌</h1>
        <hr></hr>
        <p className="subtitle">
          A message sealed with admiration… waiting to be opened.!!!
        </p>
        <hr></hr>
        <p className="subtitle">
          - From Junior ♡
        </p>
        <div className="envelope-area">
          <Envelope onClick={() => setShowModal(true)} />
        </div>
      </div>

      {/* 🔐 Modal */}
      {showModal && <PasswordModal close={() => setShowModal(false)} />}
    </div>
  );
}

export default Home;
