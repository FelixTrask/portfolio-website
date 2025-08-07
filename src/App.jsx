import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import './App.css';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function App() {
  const menuItemsRef = useRef([]);
  const projectCardsRef = useRef([]);
  const blobRefs = useRef([]);
  const progressBarRef = useRef(null);
  const typedTextRef = useRef(null);

  const [gridOffset, setGridOffset] = useState(0);
  const [gridLines, setGridLines] = useState({ horizontal: 0, vertical: 0 });
  const gridSize = 100; // square grid size in px

  useEffect(() => {
    document.title = 'Felix Trask - Portfolio';
    const iconLink = document.querySelector("link[rel*='icon']");
    if (iconLink) iconLink.href = `${process.env.PUBLIC_URL}/favicon.ico`;

    // Resize + grid line logic
    const updateGrid = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setGridLines({
        vertical: Math.ceil(vw / gridSize),
        horizontal: Math.ceil(vh / gridSize)
      });
    };

    const updateParallax = () => {
      setGridOffset(window.scrollY * 0.3);
    };

    updateGrid();
    updateParallax();

    window.addEventListener('resize', updateGrid);
    window.addEventListener('scroll', updateParallax);

    // Typed intro text
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

    // Project cards scroll animation
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

    // Triangle blob loop
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

    // Pulse blobs
    blobRefs.current.forEach((blob, i) => {
      gsap.to(blob, {
        scale: 1.2,
        yoyo: true,
        repeat: -1,
        duration: 3 + i,
        ease: 'sine.inOut',
      });
    });

    // Scroll progress bar
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
      {/* Black body background filler to prevent white */}
      <div className="fixed inset-0 bg-black z-[-50]" />

      {/* Parallax perfect-square grid */}
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

      {/* Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-50"
        style={{ width: '0%' }}
      />

      {/* Top Nav */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm border-b border-white/10 z-40">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-center space-x-16">
          {['Home', 'Projects', 'Contact'].map((text, i) => (
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
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-6 max-w-4xl mx-auto space-y-40 relative z-10">
        {/* Hero Section */}
        <section
          id="Home"
          className="relative h-screen flex flex-col items-center justify-center overflow-visible"
        >
          {/* Blobs outside main content, with safe scale room */}
          <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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

          {/* Centered content */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold drop-shadow-lg">👋 Hi, I'm Felix Trask</h1>
            <p
              ref={typedTextRef}
              className="mt-4 text-xl text-white/80 max-w-xl mx-auto h-[1.5em] select-none"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="Projects" className="space-y-12">
          <h2 className="text-4xl font-semibold text-center">Projects 🚀</h2>
          <div className="flex flex-col space-y-12">
            {[
              {
                title: 'ClearChat',
                desc: 'Messaging app with real-time emotion analysis.',
                link: 'https://github.com/rayyshen/clearchat',
              },
              {
                title: 'Python AI Project',
                desc: 'Genetic algorithm guiding dots to a goal.',
                link: 'https://github.com/FelixTrask/AI-project',
              },
              {
                title: 'This Portfolio',
                desc: 'My sleek new portfolio powered by GSAP.',
                link: 'https://github.com/FelixTrask/portfolio-website',
              },
            ].map((proj, i) => (
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
          </div>
        </section>

        {/* Contact Section */}
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