import './App.css';
import Die from './components/Die';
import { useState } from 'react';
function App() {

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const dice = new Array(10).fill(0).map(() => Math.floor(Math.random() * 6));
    console.log(dice)
    return dice
  }

  function reroll(){
    setDice(prev => generateAllNewDice());
  }

  return (
    <main>
      <div className="container">
        {dice.map(x => <Die value={x} />)}
      </div>
      <button className="roll" onClick={reroll}>
        Roll
      </button>
    </main>
  );
}

export default App;
