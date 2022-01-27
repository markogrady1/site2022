import React from 'react';
import './App.css';
import Projects from './pages/Projects';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GitHubRepos from './pages/GitHubRepos';
import Reactions from './pages/Reactions';
import MyWordle from './components/Reactions/MyWordle/MyWordle';
import ColorBlind from './components/Reactions/ColorBlind/ColorBlind';

export default function App() {
  const routes = [
    {
      path: '/',
      element: Home,
    },
    {
      path: '/projects',
      element: Projects,
    },
    {
      path: '/github',
      element: GitHubRepos,
    },
    {
      path: '/reactions',
      element: Reactions,
    },
    {
      path: '/reactions/react-wordle',
      element: MyWordle,
    },
    {
      path: '/reactions/color-blind',
      element: ColorBlind,
    },
  ];
  return (
    <>
      <main>
        <Routes>
          {routes.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Routes>
      </main>
    </>
  );
}
