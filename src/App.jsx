import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { LearnJsPage } from './components/LearnJsPage/LearnJsPage';
import { Beginner } from './components/Beginner/Beginner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/components/LearnJsPage/LearnJsPage.jsx" element={<LearnJsPage />} />
        <Route path="/Beginner/Beginner.jsx" element={<Beginner />} />
      </Routes>      
    </Router>
  )
}   

export default App;
    