import MainCard from "./MainCard";
import Nav from "./Nav";

import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="main-container">
      <Nav score={score} bestScore={bestScore} />
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <MainCard
        setScore={setScore}
        setBestScore={setBestScore}
        score={score}
        bestScore={bestScore}
      />
    </div>
  );
}
