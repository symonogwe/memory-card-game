export default function shuffleArray(array) {
  const newArray = array.slice(); // Make a copy of the original array

  for (let i = newArray.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap elements between randomIndex and i
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }

  return newArray;
}
