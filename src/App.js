import React from 'react';
import './App.css';
import Projects from './components/Projects';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GitHubRepos from './components/GitHubRepos';
import Reactions from './components/Reactions';
import Wordigo from './components/Reactions/Wordigo';

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
      path: '/reactions/wordigo',
      element: Wordigo,
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
