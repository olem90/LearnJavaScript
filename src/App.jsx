import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { LearnJsPage } from './components/LearnJsPage/LearnJsPage';
import { Beginner } from './components/Beginner/Beginner';
import { Lessons } from './components/Lessons/Lessons';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/components/LearnJsPage/LearnJsPage.jsx" element={<LearnJsPage />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/lessons" element={<Lessons />} />
      </Routes>      
    </Router>
  )
}   

export default App;
     