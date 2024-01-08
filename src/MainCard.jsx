import Card from "./Card";
import { useEffect, useState } from "react";

export default function MainCard({ setScore, setBestScore }) {
  const [data, setData] = useState(null);

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

  return (
    <div className="main-card-container">
      {data &&
        data.map((item) => {
          return <Card key={item.id} src={item.image} name={item.name} />;
        })}
    </div>
  );
}
