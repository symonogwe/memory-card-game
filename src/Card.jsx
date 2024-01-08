import { useState } from "react";

export default function Card({
  src,
  name,
  setScore,
  setBestScore,
  score,
  bestScore,
}) {
  const [clicked, setClicked] = useState(false);

  function handleDivClick() {
    // if (!clicked) {
    //   if (score < bestScore) {
    //     setScore((s) => s + 1);
    //     setClicked(true);
    //   }
    //   setScore((s) => s + 1);
    //   setBestScore((bs) => bs + 1);
    //   setClicked(true);
    // }
    // setScore(0);
    // todo: work on div click logic
  }

  return (
    <div className="character-card" onClick={handleDivClick}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
}
