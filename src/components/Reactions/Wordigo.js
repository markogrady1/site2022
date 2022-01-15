import React, { useState } from 'react';
import { fullAlphabetArray, range, arrayToMatrix } from '../../utils';
import Letter from './Letter';

function GitHubRepos() {
  const [squares, setSquares] = useState(arrayToMatrix(range(1, 25), 5));
  const [letter, useLetter] = useState(fullAlphabetArray());

  return (
    <div>
      <div className='title'>Wordigo</div>
      {squares.map((item, index) => {
        return (
          <div key={index} className='flex-container-small'>
            {item.map((item, index2) => {
              return <Letter letter={letter[index2]} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default GitHubRepos;
