import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>👋 Hi, I'm <span className="name">Felix Trask</span></h1>
        <p className="description">I'm a 15-year-old coder who loves creating cool stuff with code! 🎮💻</p>
        <p className="skills">Skills: Python, HTML, CSS, JavaScript, React, Node.js, and more!</p>
        <button
          className="contact-button"
          onClick={() => window.location.replace("https://www.github.com/FelixTrask")}
        >
          My Github
        </button>
      </header>

      <section className="projects">
        <h2>Projects 🚀</h2>
        <div className="project-card">
          <h3>Clearchat</h3>
          <p>ClearChat is a messaging app that revolutionizes digital communication by integrating real-time facial emotion anaylasis into the messages.</p>
          <a href="https://github.com/rayyshen/clearchat" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>This website, designed to show my accomplishments.</p>
          <a href="https://github.com/FelixTrask/portfolio-website" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </section>

      <footer>
        <p className="footer-text">Built with ❤️ by Felix Trask</p>
      </footer>
    </div>
  );
}

export default App;
