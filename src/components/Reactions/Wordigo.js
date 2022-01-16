import React, { useState } from 'react';
import { fullAlphabetArray, range, arrayToMatrix } from '../../utils';
import Letter from './Letter';
import './Wordigo.css';

// word of the day HARRY
function Wordigo() {
  const [squares, setSquares] = useState(arrayToMatrix(range(1, 25), 5));
  const [letter, setLetter] = useState(fullAlphabetArray());
  const [word, setWord] = useState('ABCDZ');
  const [match, setMatch] = useState(false);

  const handleCick = (value) => {
    const position = word.indexOf(value);

    if (position + 1) {
      console.log('TODO: the letter matches and its a position ' + position);
      setMatch(true);
    }
    // se                               tLetter(value);
  };

  return (
    <div>
      <div className='wordigo-container'>
        {squares.map((item, row) => {
          return (
            <div key={row} className='wordigo-flex-container'>
              {item.map((item, col) => {
                return (
                  <Letter
                    match={match}
                    key={col}
                    col={col}
                    row={row}
                    letter={letter[col]}
                    clickAction={(e) => handleCick(e)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wordigo;
