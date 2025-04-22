import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-bg-dark text-text-main min-h-screen px-4 py-8 text-center font-sans leading-relaxed">
      <header className="bg-header-dark p-8 rounded-lg mb-8">
        <h1 className="text-2xl font-bold">
          👋 Hi, I'm <span className="text-highlight">Felix Trask</span>
        </h1>
        <p className="text-lg text-text-sub my-2">I'm a 15-year-old coder who loves creating cool stuff with code! 🎮💻</p>
        <p className="text-[1.15rem] text-skill mb-6">Skills: Python, HTML, CSS, JavaScript, React, Node.js, and more!</p>
        <button
          className="bg-highlight text-white py-3 px-6 rounded-md text-lg cursor-pointer transition-colors hover:bg-highlight-alt"
          onClick={() => window.location.replace("https://www.github.com/FelixTrask")}
        >
          My Github
        </button>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl text-accent mb-6">Projects 🚀</h2>

        <div className="bg-card-bg rounded-lg p-6 my-4 max-w-2xl mx-auto shadow-card">
          <h3 className="mb-2 text-skill text-xl font-semibold">Clearchat</h3>
          <p className="mb-4 text-text-sub">
            ClearChat is a messaging app that revolutionizes digital communication by integrating real-time facial emotion analysis into the messages.
          </p>
          <a
            className="text-skill font-bold hover:text-highlight transition-colors"
            href="https://github.com/rayyshen/clearchat"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="bg-card-bg rounded-lg p-6 my-4 max-w-2xl mx-auto shadow-card">
          <h3 className="mb-2 text-skill text-xl font-semibold">Portfolio Website</h3>
          <p className="mb-4 text-text-sub">This website, designed to show my accomplishments.</p>
          <a
            className="text-skill font-bold hover:text-highlight transition-colors"
            href="https://github.com/FelixTrask/portfolio-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <footer className="mt-16 text-xs text-footer-text">
        Built with ❤️ by Felix Trask
      </footer>
    </div>
  );
}

export default App;