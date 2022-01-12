import React, { useState, useEffect } from 'react';
import './App.css';
// import Footer from './Footer';
// import Header from './Header';
import Projects from './Projects';
import { Routes, Route } from 'react-router-dom';
// import Detail from './DetailRefs';
// import Cart from './Cart';
import Home from './Home';
import GitHubRepos from './GitHubRepos';
import Reactions from './Reactions';

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
