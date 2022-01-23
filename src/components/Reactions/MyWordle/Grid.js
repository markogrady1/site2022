import React from 'react';
import { range } from '../../../utils';

export const Grid = ({ guesses, currentGuess, solution }) => {
  const empties = guesses.length < 5 ? range(1, 5 - guesses.length) : [];

  const getCompletedRows = (guess, index) => {
    const status = getStatus(guess, solution);
    return (
      <div key={index} className='square-container imcomplete'>
        {guess.split('').map((letter, i) => (
          <Square key={i} value={letter} status={status[i]} />
        ))}
      </div>
    );
  };

  const getEmtpyRows = (index) => {
    const emptySquares = range(1, 5);

    return (
      <div key={index} className='square-container imempty'>
        {emptySquares.map((_, i) => (
          <Square key={i} />
        ))}
      </div>
    );
  };

  const getCurrentRow = (guess) => {
    const guessesArr = guess.split('');
    const emptySquares = range(1, 5 - guessesArr.length);

    return (
      <div className='square-container currentlybeingused'>
        {guessesArr.map((letter, index) => (
          <Square key={index} value={letter} />
        ))}
        {emptySquares.map((_, index) => (
          <Square key={index} />
        ))}
      </div>
    );
  };

  return (
    <div className=''>
      {guesses.map((guess, i) => getCompletedRows(guess, i))}
      {guesses.length < 6 && getCurrentRow(currentGuess)}
      {empties.map((_, i) => getEmtpyRows(i))}
    </div>
  );
};

export const Square = ({ value, status }) => {
  const classes = {
    undefined: 'square',
    nomatch: 'nomatch square',
    match: 'match square',
    exists: 'exists square',
  };

  return (
    <>
      <div className={classes[status]}>{value}</div>
    </>
  );
};

const getStatus = (guess, solution) => {
  const solutionArr = solution.split('');
  const guessArr = guess.split('');

  const isMatchingPosition = Array(5).fill(false);
  const resultStatuses = Array.from(Array(guess.length));
  guessArr.map((char, index) => {
    if (char === solutionArr[index]) {
      resultStatuses[index] = 'match';
      isMatchingPosition[index] = true;
      return resultStatuses;
    }
    return resultStatuses;
  });

  guessArr.map((char, index) => {
    if (resultStatuses[index]) return resultStatuses;

    if (!solutionArr.includes(char)) {
      resultStatuses[index] = 'nomatch';
      return resultStatuses;
    }
    const characterPosition = solutionArr.findIndex(
      (item, index) => item === char && !isMatchingPosition[index]
    );

    if (characterPosition > -1) {
      resultStatuses[index] = 'exists';
      isMatchingPosition[characterPosition] = true;

      return resultStatuses;
    } else {
      resultStatuses[index] = 'nomatch';
      return resultStatuses;
    }
  });
  return resultStatuses;
};

export default Grid;
