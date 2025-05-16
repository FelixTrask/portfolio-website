import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'Felix Trask - Portfolio';

    const link = document.querySelector("link[rel*='icon']");
    link.href = (`${process.env.PUBLIC_URL}/favicon.ico`); //public folder
  }, []);

  return (
    <div>
    <head>
      <meta charset="UTF-8"></meta>
    </head>
    <div className="bg-bg-dark text-white h-screen flex flex-col px-4 py-8 font-sans relative">

      <div className="flex-grow">
      <div className="fixed -z-9 top-0 left-0 w-full h-full overflow-hidden pointer-events-none hidden lg:block">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blob-purple rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-[200px] right-[-100px] w-[400px] h-[400px] bg-blob-pink rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-150px] left-[100px] w-[400px] h-[400px] bg-blob-blue rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
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
        <h2 className="text-2xl text-accent font-semibold mb-6">Projects 🚀</h2>

        <div className="flex flex-col lg:flex-row lg:space-x-6 w-full max-w-7xl mx-auto">
          <div className="bg-card-bg rounded-lg p-6 my-6 w-full lg:w-1/3 transition-shadow duration-300 hover:shadow-glow text-center">
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

          <div className="bg-card-bg rounded-lg p-6 my-6 w-full lg:w-1/3 transition-shadow duration-300 hover:shadow-glow text-center">
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

          <div className="bg-card-bg rounded-lg p-6 my-6 w-full lg:w-1/3 transition-shadow duration-300 hover:shadow-glow text-center">
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
        </div>
      </section>
      </div>
      
      <div className="flex justify-center items-center space-x-4 hidden lg:flex mb-4">
        <img src={`${process.env.PUBLIC_URL}/webgifs/froggygif.gif`} alt="frog" height="31" width="88" />
        <img src={`${process.env.PUBLIC_URL}/webgifs/cssdif.gif`} alt="css" height="31" width="88" />
        <img src={`${process.env.PUBLIC_URL}/webgifs/candybarsnow.gif`} alt="bars" height="31" width="88" />
        <a href="https://github.com/FelixTrask/">
          <img src={`${process.env.PUBLIC_URL}/webgifs/github-check.gif`} alt="github" height="31" width="88" />
        </a>
        <img src={`${process.env.PUBLIC_URL}/webgifs/hasmile.gif`} alt="smile" height="31" width="88" />
      </div>

      <footer className="mt-auto text-xs text-footer-text text-center">
          Built with ❤️ by Felix Trask
      </footer>
    </div>
    </div>
  );
}

export default App;