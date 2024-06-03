import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
//import { LearnJsPage } from './components/LearnJsPage/LearnJsPage';
import { Lessons } from './components/Lessons/Lessons';
import { BeginnerTasks } from './components/BeginnerTasks/BeginnerTasks';
import { IntermediateTasks } from './components/IntermediateTasks/IntermediateTasks';
import { AdvancedTasks } from './components/AdvancedTasks/AdvancedTasks';
import { BeginnerTests } from './components/BeginnerTests/BeginnerTests';
import { IntermediateTests } from './components/IntermediateTests/IntermediateTests';
import { AdvancedTests } from './components/AdvancedTests/AdvancedTests';
import { BeginnerQuizzes } from './components/BeginnerQuizzes/BeginnerQuizzes';
import { IntermediateQuizzes } from './components/IntermediateQuizzes/IntermediateQuizzes';
import { AdvancedQuizzes } from './components/AdvancedQuizzes/AdvancedQuizzes';
import { SelectQuizLevel } from './components/SelectQuizLevel/SelectQuizLevel';
import { SelectTaskLevel } from './components/SelectTaskLevel/SelectTaskLevel';
import { SelectTestLevel } from './components/SelectTestLevel/SelectTestLevel';
import { About } from './components/About/About';
import { Resources } from './components/Resources/Resources';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/tasks" element={<SelectTaskLevel />} /> 
        <Route path="/tasks/beginner" element={<BeginnerTasks />} />
        <Route path="/tasks/intermediate" element={<IntermediateTasks />} />
        <Route path="/tasks/advanced" element={<AdvancedTasks />} />
        <Route path="/tests" element={<SelectTestLevel />} />
        <Route path="/tests/beginner" element={<BeginnerTests />} />
        <Route path="/tests/intermediate" element={<IntermediateTests />} />
        <Route path="/tests/advanced" element={<AdvancedTests />} />
        <Route path="/quizzes" element={<SelectQuizLevel />} />
        <Route path="/quizzes/beginner" element={<BeginnerQuizzes />} />
        <Route path="/quizzes/intermediate" element={<IntermediateQuizzes />} />
        <Route path="/quizzes/advanced" element={<AdvancedQuizzes />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>      
    </Router>
  ) 
}   

export default App; 
     

