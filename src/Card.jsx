import { useState } from "react";

export default function Card({
  src,
  name,
  setScore,
  setBestScore,
  score,
  bestScore,
  id,
  clicked,
  setClicked,
}) {
  function handleDivClick() {
    if (!clicked.includes(id)) {
      const newArr = [...clicked];
      newArr.push(id);
      setClicked(newArr);
      setScore((s) => s + 1);
      return;
    } else {
      if (score > bestScore) {
        setBestScore(score);
        setScore(0);
        setClicked([]);
        return;
      } else {
        setScore(0);
        setClicked([]);
      }
    }
  }

  return (
    <div className="character-card" onClick={handleDivClick}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
}
