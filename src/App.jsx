import React from 'react';
import './App.css';
import InterImage from './image/inter.jpg';
import GraphImage from './image/graph.png';
import ScaleImage from './image/scale.png';
import LogoImage from './image/logo.png';

const App = () => {
  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
      <img className="logo-image" src={LogoImage} alt="logo" />
        <div className="logo">Firstbench</div>
        <div className="menu">
          <a href="#">Dashboard</a>
          <a href="#">FirstGuru</a>
          <a href="#">TownHall</a>
          <a href="#">AI Evaluation</a>
          <a href="#">Performance</a>
          <a href="#">Mock Test</a>
        </div>
        <div className="profile">P</div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <div className="result-card">
            <img src={InterImage} alt="result illustration" />
            <h2>Your Result!</h2>
            <p>All your insights & details in one place</p>

            {/* Create a flex container for score and top-score */}
            <div className="result-details">
              <div className="score">
                <h3>You've Passed</h3>
                <p>136 / 240</p>
                <span>76% ACCURACY</span>
              </div>
              <div className="top-score">
                <h4>Top Score</h4>
                <p>230 / 240</p>
                <span>92% ACCURACY</span>
              </div>
            </div>

            <button>Practice more</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="improvements">
            <h3>Improvements</h3>
            <div className="tags">
      <span className="geography">Geography</span>
      <span className="politics">Politics</span>
      <span className="current-affairs">Current Affairs</span>
      <span className="general-studies">General Studies</span>
      <span className="mathematics">Mathematics</span>
      <span className="english-literature">English Literature</span>
      <span className="indian-history">Indian History</span>
      <span className="economics">Economics</span>
    </div>
          </div>

          <div className="response-time">
            <h3>Response Time</h3>
            <p>60% Ans took <span>+2min</span></p>
            <p>You are slow!</p>
          </div>

          <div className="approach-data">
            <h3>Approach Data</h3>
            <ul>
              <li>25% Based on Facts</li>
              <li>32% Based on Analysis</li>
              <li>19% Based on Elimination</li>
              <li>24% Based on Guess</li>
            </ul>
          </div>

          <div className="suggestions">
            <h3>Suggestions</h3>
            <ul>
              <li>Easy: 40 sec</li>
              <li>Medium: 1.5 min</li>
              <li>Hard: 3 min</li>
            </ul>
          </div>

          <div className="compare-accuracy">
            <h3>Compare Accuracy</h3>
            {/* Add graph/chart components here */}
            <img src={GraphImage} alt="graph" />
          </div>

          <div className="time-taken">
            <h3>Time Taken</h3>
            {/* Add graph/timeline components here */}
            <img src={ScaleImage} alt="scale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
