import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DirectoryPage } from './pages/DirectoryPage';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  // Simple scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-1">
        {currentView === 'HOME' ? (
          <HomePage onNavigate={setCurrentView} />
        ) : (
          <DirectoryPage onNavigate={setCurrentView} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;