import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { LearnJsPage } from './components/LearnJsPage/LearnJsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/components/LearnJsPage/LearnJsPage.jsx" element={<LearnJsPage />} />
      </Routes>      
    </Router>
  )
}

export default App;
  