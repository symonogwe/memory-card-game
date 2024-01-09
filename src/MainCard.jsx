import Card from "./Card";
import { useEffect, useState } from "react";

import shuffleArray from "./utils";

export default function MainCard({ setScore, setBestScore, score, bestScore }) {
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState([]);

  function playAgain() {
    location.reload();
  }

  useEffect(() => {
    let isStopped = false;

    if (isStopped === false) {
      fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,10,34,7,6,11,25,5,15"
      )
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    return () => {
      isStopped = true;
    };
  }, []);

  if (clicked.length === 12) {
    return (
      <div className="game-over-container">
        <p>Congrats! You Got All Characters</p>
        <button onClick={playAgain}>Play Again</button>
      </div>
    );
  } else {
    return (
      <div className="main-card-container">
        {data &&
          shuffleArray(data).map((item) => {
            return (
              <Card
                key={item.id}
                src={item.image}
                name={item.name}
                setScore={setScore}
                setBestScore={setBestScore}
                score={score}
                bestScore={bestScore}
                id={item.id}
                clicked={clicked}
                setClicked={setClicked}
              />
            );
          })}
      </div>
    );
  }
}
