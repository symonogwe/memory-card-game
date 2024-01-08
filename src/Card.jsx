export default function Card({ src, name }) {
  return (
    <div className="character-card">
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
}
