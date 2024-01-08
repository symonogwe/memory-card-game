import MainCard from "./MainCard";
import Nav from "./Nav";

import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="maim-container">
      <Nav score={score} bestScore={bestScore} />
      <MainCard setScore={setScore} setBestScore={setBestScore} />
    </div>
  );
}
