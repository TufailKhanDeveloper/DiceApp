import React, { useState } from 'react';
import './play.css';
import Cube from '../Cube/Cube';

function Play() {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected list item

  const userNo = (event) => {
    const number = parseInt(event.target.id, 10); // Get the ID of the clicked element and parse it as an integer
    setSelectedNumber(number);
    setSelectedItem(number); // Update selected item state
    setErrorMessage(false); // Clear the error message
  };

  return (
    <>
      <div className='navbar'>
        <div className="score">
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>

        <div className="dice-numbers">
          <span className={errorMessage ? 'redMessage' : 'noDisplay'}>
            You have not selected any number
          </span>
          <ul>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <li
                key={num}
                id={num}
                className={selectedItem === num ? 'selected' : ''} // Apply 'selected' class if item is selected
                onClick={userNo}
              >
                {num}
              </li>
            ))}
          </ul>

          <p>Select Number</p>
        </div>
      </div>
      <Cube
        setSelectedNumber={setSelectedNumber}
        selectedNumber={selectedNumber}
        errorMessage={setErrorMessage}
        score={setScore}
      />
    </>
  );
}

export default Play;
