import React, { useState } from 'react'
import Button from '../Button/Button'
import './Cube.css'
import Rules from '../Rules/Rules'
import { dice } from './Dice/dice'

function Cube({ selectedNumber, errorMessage, score, setSelectedNumber }) {
  const [displayRules, setDisplayRules] = useState(false);
  const [randomNumber, setRandomNumber] = useState(1);

  // const {userNo} = userSelectedNo;

  const showRules = () => {
    if (displayRules === false) {
      setDisplayRules(true);
    }
    else {
      setDisplayRules(false);

    }
  };

  // const randomNo = () =>{

  //   if(selectedNumber===0){
  //     errorMessage(true)
  //   }
  //   else{
  //     errorMessage(false)
  //   }

  //   console.log("User Selected No: ",selectedNumber)
  //   const selectedNo = parseInt(selectedNumber)

  //   const rnd = Math.floor(Math.random()*6)+1;
  //   setRandomNumber(typeof(rnd))
  //   console.log("Random Selected No: ",rnd)

  //   let totalScore=0;
  //   if(selectedNo == randomNumber){
  //     totalScore= totalScore + selectedNo;
  //     score(totalScore)   
  //   }
  // }

  const randomNo = () => {
    if (selectedNumber === 0 || selectedNumber === null) {
      errorMessage(true);
      return;
    } else {
      errorMessage(false);
    }

    console.log("User Selected No: ", selectedNumber);
    const selectedNo = parseInt(selectedNumber, 10); // Ensure selectedNumber is an integer

    const rnd = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(rnd); // Correctly set the random number
    console.log("Random Selected No: ", rnd);

    // Use a callback to update the score based on previous score
    score(prevScore => {
      let newScore = prevScore;
      if (selectedNo === rnd) {
        newScore += selectedNo; // Update the score
        score(newScore)
      }

      else {
        newScore = newScore - 2;
        score(newScore)
      }
      return newScore;
    });
  };

  const resetScore = () => {
    score(0);
    setSelectedNumber(0)
  }

  const diceImage = dice.find(die => die.id === randomNumber)?.img || null;


  return (
    <div className='cube'>

      {diceImage && <img src={diceImage} alt="Dice" onClick={randomNo} />}
      <p>Click on Dice to roll</p>

      <div className="buttons">
        <Button text='Reset Score' isOutline={true} onClick={resetScore} />
        <Button text='Show Rules' onClick={showRules} />
      </div>

      <div className={displayRules ? '' : 'display'}>
        <div className="rules">
          <Rules />
        </div>
      </div>

    </div>
  )
}

export default Cube