import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar';

function App() {
  const randomArray = (length) => {
    // Create an array with numbers from 1 to length
    const array = Array.from({ length }, (_, index) => index + 1);
  
    // Perform Fisher-Yates shuffle to randomly arrange the numbers
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    return array;
  };

  const [cardNumbers, setCardNumbers] = useState(randomArray(10));
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

 function randomize(){
  setCardNumbers(randomArray(10))
 }

  const handleClick = (num) =>{
    if (clickedCards.includes(num)) {
      // If the card is already clicked, reset the score to 0
      setScore(0);
      setClickedCards([])
    } else {
      // If the card is clicked for the first time, add it to clickedCards array
      setScore((prevNum)=> prevNum+1)
      setClickedCards((prev) => [...prev, num]);
    }
    randomize();
  }
  return (
    <>
     <Navbar score={score}/>
     <div className="container">
      {cardNumbers.map((num) => (
        <Card key={num} handleClick={handleClick} num={num} />
      ))}
      </div>
     
    </>
  )
}

export default App
