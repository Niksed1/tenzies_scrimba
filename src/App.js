import './App.css';
import Die from './components/Die';
import { useState, useRef, useEffect } from 'react';
import { nanoid } from "nanoid"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
function App() {
  let gameWon = false;
  const [dice, setDice] = useState(generateAllNewDice());
  const { width, height } = useWindowSize()
  const focusRef = useRef(null);



  if (dice.every(x => x.isHeld) && 
        dice.every(x => x.value === dice[0].value)){
        gameWon = true;
    }


  useEffect(() => {
      if (gameWon){
        focusRef.current.focus()
      }
  }, [gameWon])

  function generateAllNewDice() {
    return new Array(10)
          .fill(0)
          .map(() => ({
          value: Math.ceil(Math.random() * 6), 
          //value: 2,
          isHeld: false,
          id: nanoid()
      }));
  }

  function reroll(){
    if (gameWon){
      setDice(() => generateAllNewDice())
    }
    else {
    setDice(oldDice => oldDice.map(die => 
        die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
    ));
    }
  }

  function hold(id){
    setDice(oldDice => oldDice.map(x => {
      if(x.id === id){
        return {...x, isHeld: !x.isHeld}
      }
      return x;
    }));
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {dice.map(x => <Die key={x.id} id = {x.id} value={x.value} isHeld={x.isHeld} click={hold}/>)}
      </div>
      <button className="roll" ref={focusRef} onClick={reroll}>
        {gameWon ? "New Game" : "Roll"}
        {gameWon && <Confetti
              width={width}
              height={height} /> }
      </button>
    </main>
  );
}

export default App;
