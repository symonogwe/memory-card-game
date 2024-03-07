export default function Nav({ score, bestScore }) {
  return (
    <div className="nav-container" role="navbar">
      <div className="game-name-container">
        <h1>Rick & Morty Memory Game</h1>
      </div>
      <div className="score-board-container">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
}
