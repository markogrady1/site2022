import React from 'react';

export default function Footer() {
  const dt = new Date().getFullYear();
  return (
    <footer>
      <p>This site is created by me with love</p>
      <p>&copy; Mark O Grady {dt}</p>
    </footer>
  );
}
