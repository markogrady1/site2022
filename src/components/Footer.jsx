import React from 'react';
import './includes.css';

export default function Footer() {
  const dt = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p className='statement'>This site is created by me with love</p>
      <p className='statement'>&copy; Mark O Grady {dt}</p>
    </footer>
  );
}
