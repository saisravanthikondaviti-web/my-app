import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LetterPage from "./pages/LetterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </Router>
  );
}

export default App;