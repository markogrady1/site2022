import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import PlayAgain from './PlayAgain';

import './MyWordle.css';
import Keyboard from './Keyboard';

function MyWordle() {
  const [currentGuess, setCurrentGuess] = useState('');
  // tempory solution state
  const [solution, setSolution] = useState('HARRY');
  const [isGameOver, setIsGameOver] = useState(false);
  const [outcome, setOutcome] = useState('');
  const [gameId, setGameId] = useState(0);

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

  useEffect(() => {
    localStorage.setItem('guesses', JSON.stringify(guesses));
  }, [guesses]);

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
    setGameId(gameId + 1);
    setIsGameOver(false);
    setGuesses([]);
    setCurrentGuess('');
  };

  const onEnter = () => {
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
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === 'Enter') {
        onEnter();
      } else if (e.code === 'Backspace') {
        onDelete();
      } else {
        const key = e.key.toUpperCase();
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          // onChar(key);
        }
      }
    };
    window.addEventListener('keyup', listener);
    return () => {
      window.removeEventListener('keyup', listener);
    };
  }, [onEnter, onDelete]);

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
            <PlayAgain onClick={() => startNewGame()} gameStatus={outcome} />
          </div>
        ) : (
          <div>
            <Keyboard onClick={onClick} onDelete={onDelete} /> q
          </div>
        )}
      </div>
    </>
  );
}

export default MyWordle;
