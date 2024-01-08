import MainCard from "./MainCard";
import Nav from "./Nav";

import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function increaseScore() {
    setScore((score) => score + 1);
  }

  function increaseBestScore() {
    setBestScore((bestScore) => bestScore + 1);
  }

  return (
    <div className="maim-container">
      <Nav score={score} bestScore={bestScore} />
      <MainCard
        increaseScore={increaseScore}
        increaseBestScore={increaseBestScore}
      />
    </div>
  );
}
