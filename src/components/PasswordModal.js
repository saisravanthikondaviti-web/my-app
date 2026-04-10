import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ IMPORTANT
import "./PasswordModal.css";

function PasswordModal({ close }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ create navigator

  const handleSubmit = () => {
    if (password === "professor") {
      navigate("/letter"); // ✅ go to LetterPage
    } else {
      alert("Wrong password 😢");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Enter Password 💌</h2>

        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div>
          <button onClick={handleSubmit}>Unlock</button>
          <button onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordModal;
