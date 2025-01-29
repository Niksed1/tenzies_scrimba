import './App.css';
import Die from './components/Die';
import { useState } from 'react';
import { nanoid } from "nanoid"
function App() {
/**
     * Challenge: Update the `rollDice` function to not just roll
     * all new dice, but instead to look through the existing dice
     * to NOT roll any that are being `held`.
     * 
     * Hint: this will look relatively similiar to the `hold`
     * function below. When we're "rolling" a die, we're really
     * just updating the `value` property of the die object.
     */ 

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10)
          .fill(0)
          .map(() => ({
          value: Math.ceil(Math.random() * 6), 
          isHeld: false,
          id: nanoid()
      }));
  }

  function reroll(){
    setDice(oldDice => oldDice.map(die => 
        die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
    ));
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
      <button className="roll" onClick={reroll}>
        Roll
      </button>
    </main>
  );
}

export default App;
