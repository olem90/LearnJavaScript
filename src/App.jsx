import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
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
import { Introduction } from './components/Lessons/Introduction';
import { Setup } from './components/Lessons/Setup';
import { VariablesAndDataTypes } from './components/Lessons/VariablesAndDataTypes';
import { BasicOperators } from './components/Lessons/BasicOperators';
import { ControlStructures } from './components/Lessons/ControlStructures';
import { Loops } from './components/Lessons/Loops';
import { Functions } from './components/Lessons/Functions';
import { Objects } from './components/Lessons/Objects';
import { Arrays } from './components/Lessons/Arrays';
import { Events } from './components/Lessons/Events';
import { DomManipulation } from './components/Lessons/DomManipulation';
import { AsyncJavaScript } from './components/Lessons/AsyncJavaScript ';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />}> 
          <Route index element={<Navigate to="introduction" replace />} /> 
          <Route path="introduction" element={<Introduction />} />
          <Route path="setup" element={<Setup />} />
          <Route path="variables" element={<VariablesAndDataTypes />} />
          <Route path="operators" element={<BasicOperators />} />
          <Route path="controlStructures" element={<ControlStructures />} /> 
          <Route path="loops" element={<Loops />} /> 
          <Route path="functions" element={<Functions />} /> 
          <Route path="objects" element={<Objects />} />  
          <Route path="arrays" element={<Arrays />} /> 
          <Route path="events" element={<Events />} /> 
          <Route path="domManipulation" element={<DomManipulation />} /> 
          <Route path="asyncJavaScript" element={<AsyncJavaScript />} /> 
        </Route> 
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
  ); 
}

export default App;



 