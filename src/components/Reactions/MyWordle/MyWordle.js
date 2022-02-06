import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import PlayAgain from './PlayAgain';
import './MyWordle.css';
import Keyboard from './Keyboard';
import words from '../../../words';

function MyWordle() {
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [outcome, setOutcome] = useState('');
  const [gameId, setGameId] = useState(0);
  const [isAWord, setIsAWord] = useState(true);
  const [solution, setSolution] = useState(() => {
    const storedSolution = JSON.parse(localStorage.getItem('solution'));
    if (storedSolution !== null) return storedSolution;
    const currentwor = words[Math.floor(Math.random() * words.length)] || '';
    return currentwor.toUpperCase();
  });

  const [guesses, setGuesses] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('guesses')) ?? [];
    } catch {
      console.error(
        'could not retrieve data from localstorage as it was malformed'
      );
      return [];
    }
  });

  useEffect(
    (isGameOver, refreshAll) => {
      console.log('THE SOLUTION IS: ', solution);
      localStorage.setItem('solution', JSON.stringify(solution));
      localStorage.setItem('guesses', JSON.stringify(guesses));
      if (guesses.length === 6 && isGameOver) {
        refreshAll();
      }
    },
    [guesses, solution]
  );

  const onClick = (e) => {
    if (e.currentTarget.textContent === 'DELETE') {
      onDelete();
      return;
    }

    if (e.currentTarget.textContent === 'ENTER') {
      onEnter();
      return;
    }

    if (currentGuess.length < 5 && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${e.currentTarget.textContent}`);
    }
  };

  const startNewGame = () => {
    refreshAll();
  };

  function refreshAll() {
    setGameId(gameId + 1);
    setIsGameOver(false);
    setGuesses([]);
    setCurrentGuess('');
    setSolution(() => {
      const currentwor = words[Math.floor(Math.random() * words.length)] || '';
      return currentwor.toUpperCase();
    });
  }

  const onEnter = () => {
    const isWord = words.find((item) => item.toUpperCase() === currentGuess);

    if (!isWord && currentGuess.length === 5 && guesses.length < 6) {
      setIsAWord(false);
      return;
    }
    const res = currentGuess === solution;
    if (res) {
      setIsGameOver(true);
      setOutcome('won');
    }

    if (currentGuess.length === 5 && guesses.length < 6) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess('');
    }

    if (guesses.length === 5 && !res) {
      setIsGameOver(true);
      setOutcome('lost');
    }
  };
  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
    if (currentGuess.length < 6) {
      setIsAWord(true);
    }
  };

  const onCharacter = (value) => {
    if (currentGuess.length < 5 && guesses.length < 6) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  return (
    <>
      <div className='grid-container'>
        <Grid
          guesses={guesses}
          currentGuess={currentGuess}
          solution={solution}
        />
      </div>{' '}
      <div className='keyboard-container'>
        {isGameOver ? (
          <div>
            <PlayAgain
              solution={solution}
              onClick={() => startNewGame()}
              gameStatus={outcome}
            />
          </div>
        ) : (
          <div>
            <Keyboard
              onClick={onClick}
              onEnter={onEnter}
              onDelete={onDelete}
              onCharacter={onCharacter}
            />
          </div>
        )}
        {!isAWord && <div className='not-in-word-list'>Word not found</div>}
      </div>
    </>
  );
}

export default MyWordle;
