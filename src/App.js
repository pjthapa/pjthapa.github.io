import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import BlogPage from './pages/blog';
import CalendarPage from './pages/calendar';
import PortfolioPage from './pages/portfolio';
import ResumePage from './pages/resume';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='routes'>
          <Routes>
            <Route path = "/" exact element ={<PortfolioPage />}></Route>
            <Route path = "/resume" exact element ={<ResumePage />}></Route>
            <Route path = "/blog" exact element ={<BlogPage />}></Route>
            <Route path = "/calendar" exact element ={<CalendarPage />}></Route>

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
