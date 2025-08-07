import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import './App.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function App() {
  const projectCardsRef = useRef([]);
  const blobRefs = useRef([]);
  const progressBarRef = useRef(null);
  const typedTextRef = useRef(null);

  const [gridOffset, setGridOffset] = useState(0);
  const [gridLines, setGridLines] = useState({ horizontal: 0, vertical: 0 });
  const gridSize = 100; // square grid size in px

  useEffect(() => {
    document.title = 'Felix Trask';
    const iconLink = document.querySelector("link[rel*='icon']");
    if (iconLink) iconLink.href = `${process.env.PUBLIC_URL}/favicon.ico`;

    const updateGrid = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setGridLines({
        vertical: Math.ceil(vw / gridSize),
        horizontal: Math.ceil(vh / gridSize),
      });
    };

    const updateParallax = () => {
      setGridOffset(window.scrollY * 0.3);
    };

    updateGrid();
    updateParallax();

    window.addEventListener('resize', updateGrid);
    window.addEventListener('scroll', updateParallax);

    gsap.fromTo(
      typedTextRef.current,
      { text: '' },
      {
        duration: 3.5,
        text: 'High school student & aspiring developer',
        ease: 'none',
        delay: 0.5,
      }
    );

    projectCardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const trianglePositions = [
      { x: -200, y: -150 },
      { x: 200, y: -150 },
      { x: 0, y: 200 },
    ];

    function animateBlobsInTriangle() {
      const randomized = [...trianglePositions].sort(() => Math.random() - 0.5);
      blobRefs.current.forEach((blob, i) => {
        gsap.to(blob, {
          x: randomized[i].x,
          y: randomized[i].y,
          duration: 2,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.to(blob, {
              x: 0,
              y: 0,
              duration: 2,
              ease: 'power2.inOut',
              onComplete: animateBlobsInTriangle,
              delay: 1,
            });
          },
          delay: 1,
        });
      });
    }

    animateBlobsInTriangle();

    blobRefs.current.forEach((blob, i) => {
      gsap.to(blob, {
        scale: 1.2,
        yoyo: true,
        repeat: -1,
        duration: 3 + i,
        ease: 'sine.inOut',
      });
    });

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        ease: 'power3.out',
        duration: 0.2,
      });
    };

    window.addEventListener('scroll', updateProgress);

    return () => {
      window.removeEventListener('resize', updateGrid);
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('scroll', updateProgress);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div className="fixed inset-0 bg-black z-[-50]" />

      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ transform: `translateY(${gridOffset}px)` }}
      >
        {Array.from({ length: gridLines.vertical }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 h-full w-px bg-white opacity-5"
            style={{ left: `${i * gridSize}px` }}
          />
        ))}
        {Array.from({ length: gridLines.horizontal }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 w-full h-px bg-white opacity-5"
            style={{ top: `${i * gridSize}px` }}
          />
        ))}
      </div>

      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-50"
        style={{ width: '0%' }}
      />

      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm border-b border-white/10 z-40">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left side - nav buttons */}
          <div className="flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((text) => (
              <button
                key={text}
                className="text-white/90 hover:text-white font-semibold transition text-lg"
                onClick={() =>
                  document.getElementById(text).scrollIntoView({ behavior: 'smooth' })
                }
              >
                {text}
              </button>
            ))}
          </div>

          {/* Right side - icons */}
          <div className="flex items-center space-x-6">
            {/* GitHub Icon */}
            <a
              href="https://github.com/FelixTrask"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/80 hover:text-white transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6.0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6.0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3.0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1.0-6.2-.3-40.4-.3-61.4.0.0-70 15-84.7-29.8.0.0-11.4-29.1-27.8-36.6.0.0-22.9-15.7 1.6-15.4.0.0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5.0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9.0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4.0 33.7-.3 75.4-.3 83.6.0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"
                />
              </svg>
            </a>

            {/* Email Icon */}
            <a
              href="mailto:felixtrask@gmail.com"
              aria-label="Email Felix"
              className="text-white/80 hover:text-white transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M64 112c-8.8.0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1.0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16h384c8.8.0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64h384c35.3.0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3.0-64-28.7-64-64V128z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </header>


      <main className="pt-24 px-6 max-w-4xl mx-auto space-y-40 relative z-10">
        <section
          id="Home"
          className="relative h-screen flex flex-col items-center justify-center overflow-visible"
        >
          <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
            <div id="About" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {['#44f', '#f4a', '#4fa'].map((color, i) => (
                <div
                  key={i}
                  ref={(el) => (blobRefs.current[i] = el)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full mix-blend-screen filter blur-3xl opacity-20"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold drop-shadow-lg">👋 Hi, I'm Felix Trask</h1>
            <p
              ref={typedTextRef}
              className="mt-4 text-xl text-white/80 max-w-xl mx-auto h-[1.5em] select-none"
            />
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-4xl font-semibold text-center">About Me</h2>
          <p>
            Hello, and welcome to my website! I'm a high school student in NoVa who loves to make/hack/learn cool stuff. If I'm not doing any of those, you'll probably find me either rowing crew, at a climbing gym or playing ultimate frisbee with my friends.
            <br /><br />
            I love coding, and some of my skills include{' '}
            <span className="bg-gradient-to-r from-pink-500 via-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">
              Python, C++, HTML, CSS, JavaScript, React, and Node.js.
            </span>
          </p>
        </section>

        <section id="Projects" className="space-y-12">
          <h2 className="text-4xl font-semibold text-center">Projects</h2>
          <div className="flex flex-col space-y-12">
            {[{
              title: 'Stabler-Leadbeater Apothecary AR Project',
              desc: 'A POC for an apothecary museum to demonstrate an application of AR to their exhibits.',
              link: 'https://github.com/FelixTrask/arproject',
            }, {
              title: 'ClearChat',
              desc: 'Messaging app with real-time facial emotion analysis, through AI.',
              link: 'https://github.com/rayyshen/clearchat',
            }, {
              title: 'Python AI Project',
              desc: 'Genetic algorithm guiding dots to a goal.',
              link: 'https://github.com/FelixTrask/AI-project',
            }].map((proj, i) => (
              <article
                key={proj.title}
                ref={(el) => (projectCardsRef.current[i] = el)}
                onClick={() => window.open(proj.link, '_blank')}
                className="cursor-pointer rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-3xl font-bold mb-3">{proj.title}</h3>
                <p className="text-white/70 mb-4">{proj.desc}</p>
                <span className="underline text-white/80">View on GitHub</span>
              </article>
            ))}
            <p className="text-center -my-6">More on my <a href="https://github.com/FelixTrask" target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub" className="text-pink-500 hover:text-indigo-400 transition">Github!</a></p>
          </div>
        </section>

        <section id="Contact" className="text-center max-w-xl mx-auto space-y-4 py-20">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="text-white/70">
            Email me at{' '}
            <a href="mailto:felix@example.com" className="underline">
              felixtrask@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}