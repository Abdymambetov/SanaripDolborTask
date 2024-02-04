import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATHS } from './common/constants';
import Layout from './components/Base/Layout/Layout';
import { Home } from './pages/Home/Home'
import Task1 from './pages/Task1/Task1';
import Task3 from './pages/Task3/Task3';
import Task2 from './pages/Task2/Task2';

function App() {
  return (
    <Routes>
      <Route path={''} element={<Layout />}>
        <Route path={PATHS.main} element={<Home />} />
        <Route path={PATHS.task1} element={<Task1 />} />
        <Route path={PATHS.task2} element={<Task2 />} />
        <Route path={PATHS.task3} element={<Task3 />} />
      </Route>
    </Routes>
  )
}

export default App
