import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>👋 Hi, I'm <span className="name">Felix Trask</span></h1>
        <p className="description">I'm a 15-year-old coder who loves creating cool stuff with code! 🎮💻</p>
        <p className="skills">Skills: HTML, CSS, JavaScript, React, Node.js, and more!</p>
        <button
          className="contact-button"
          onClick={() => alert('Let\'s chat!')}
        >
          Contact Me 💬
        </button>
      </header>

      <section className="projects">
        <h2>Projects 🚀</h2>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Built with React, showcasing my coding journey!</p>
          <a href="https://github.com/felixtrask" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Weather App</h3>
          <p>A simple weather app that fetches live data from an API.</p>
          <a href="https://github.com/felixtrask/weather-app" target="_blank" rel="noopener noreferrer">
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
