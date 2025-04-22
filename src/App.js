import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'Felix Trask - Portfolio';

    const link = document.querySelector("link[rel*='icon']");
    link.href = '/favicon.ico'; //public folder
  }, []);

  return (

    <div className="bg-bg-dark text-white min-h-screen px-4 py-8 font-sans relative flex flex-col items-center justify-center">
      <div className="fixed -z-10 top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blob-purple rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute top-[200px] right-[-100px] w-[400px] h-[400px] bg-blob-pink rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <header className="bg-card-bg/70 backdrop-blur-lg p-8 rounded-xl max-w-3xl mx-auto shadow-glow text-center">
        <h1 className="text-4xl font-bold mb-4">
          👋 Hi, I'm <span className="bg-gradient-to-r from-pink-500 via-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">Felix Trask</span>
        </h1>
        <p className="text-lg text-text-sub mb-2">
          I'm a high school student in NoVa who loves to make/hack/learn cool stuff!
        </p>
        <p className="text-md text-yellow-400 mb-6">
          Skills: Python, HTML, CSS, JavaScript, React, Node.js, and more!
        </p>
        <button
          className="bg-pink-600 hover:bg-pink-500 text-white font-semibold py-2 px-5 rounded-md transition-colors"
          onClick={() => window.location.replace('https://www.github.com/FelixTrask')}
        >
          My GitHub
        </button>
      </header>

      <section className="mt-12 w-full flex flex-col items-center">
        <h2 className="text-2xl text-accent mb-6">Projects 🚀</h2>

        <div className="bg-card-bg rounded-lg p-6 my-6 max-w-2xl mx-auto transition-shadow duration-300 hover:shadow-glow text-center">
          <h3 className="mb-2 text-skill text-xl font-semibold">Clearchat</h3>
          <p className="mb-4 text-text-sub">
            ClearChat is a messaging app that revolutionizes digital communication by integrating real-time facial emotion analysis into the messages. Made at <a className="text-skill hover:text-highlight font-bold" 
              href="https://scrapyard.hackclub.com/nova" 
              target="_blank" 
              rel="noopener noreferrer">
            Scrapyard NoVa
            </a>
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

        <div className="bg-card-bg rounded-lg p-6 my-6 max-w-2xl mx-auto transition-shadow duration-300 hover:shadow-glow text-center">
          <h3 className="mb-2 text-skill text-xl font-semibold">Python AI Project</h3>
          <p className="mb-4 text-text-sub">A python project that uses a genetic algorithm to guide dots to a goal.</p>
          <a
            className="text-skill font-bold hover:text-highlight transition-colors"
            href="https://github.com/FelixTrask/AI-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="bg-card-bg rounded-lg p-6 my-6 max-w-2xl mx-auto transition-shadow duration-300 hover:shadow-glow text-center">
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

      <footer className="mt-16 text-xs text-footer-text text-center">
        Built with ❤️ by Felix Trask
      </footer>
    </div>
  );
}

export default App;