import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { LearnJsPage } from './components/LearnJsPage/LearnJsPage';
import { Beginner } from './components/Beginner/Beginner';
import { Lessons } from './components/Lessons/Lessons';
import { BeginnerTasks } from './components/BeginnerTasks/BeginnerTasks';
import { SelectQuizLevel } from './components/SelectQuizLevel/SelectQuizLevel';
import { SelectTaskLevel } from './components/SelectTaskLevel/SelectTaskLevel';
import { SelectTestLevel } from './components/SelectTestLevel/SelectTestLevel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/components/LearnJsPage/LearnJsPage.jsx" element={<LearnJsPage />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/beginnerTasks" element={<BeginnerTasks />} />
        <Route path="/beginnerTasks" element={<SelectQuizLevel />} />
        <Route path="/beginnerTasks" element={<SelectTaskLevel />} />
        <Route path="/beginnerTasks" element={<SelectTestLevel />} />
      </Routes>      
    </Router>
  ) 
}   

export default App; 
     