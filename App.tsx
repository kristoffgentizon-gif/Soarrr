import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname === '/services' || pathname === '/contact') {
        return pathname;
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      if (pathname === '/services' || pathname === '/contact') {
        setCurrentPath(pathname);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path.startsWith('/#')) {
      const hash = path.substring(2);
      if (currentPath !== '/') {
        setCurrentPath('/');
        window.history.pushState({}, '', '/');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050403] text-[#f5f3ef] selection:bg-[#ff5a1f] selection:text-white flex flex-col font-sans">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      
      <div className="flex-1">
        {currentPath === '/services' && <Services onNavigate={handleNavigate} />}
        {currentPath === '/contact' && <Contact />}
        {currentPath === '/' && <Home onNavigate={handleNavigate} />}
      </div>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
