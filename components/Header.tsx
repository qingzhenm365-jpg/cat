import React from 'react';
import { ViewState } from '../types';
import { Icon } from './Icon';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f3ece7] dark:border-[#3e2d23] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
      <div className="flex justify-center w-full">
        <div className="flex w-full max-w-[1200px] items-center justify-between px-4 py-4 md:px-10">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('HOME')}
          >
            <div className="flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Icon name="pets" className="!text-[32px]" />
            </div>
            <h2 className="text-text-main dark:text-white text-xl font-extrabold tracking-tight">
              {currentView === 'HOME' ? 'Cat Paradise' : 'Purrfect Match'}
            </h2>
          </div>

          {/* Directory Search (Only visible on Directory view) */}
          {currentView === 'DIRECTORY' && (
             <div className="hidden md:flex flex-1 max-w-md mx-8">
               <div className="relative w-full">
                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center">
                   <Icon name="search" className="!text-[20px]" />
                 </div>
                 <input 
                    type="text"
                    placeholder="Search breeds like 'Siamese' or 'Ragdoll'..."
                    className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all"
                 />
               </div>
             </div>
          )}

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('DIRECTORY')}
              className={`text-sm font-bold transition-colors ${currentView === 'DIRECTORY' ? 'text-primary' : 'text-text-main hover:text-primary'}`}
            >
              Directory
            </button>
            <button className="text-text-main hover:text-primary text-sm font-bold transition-colors">
              Care Tips
            </button>
            <button className="text-text-main hover:text-primary text-sm font-bold transition-colors">
              About
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {currentView === 'HOME' ? (
              <button className="hidden sm:flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md transition-all hover:shadow-lg active:scale-95">
                <span className="truncate">Join Community</span>
              </button>
            ) : (
              <div className="flex items-center gap-3">
                 <button className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary/30 transition-all">
                    <Icon name="favorite" className="!text-[20px]" />
                 </button>
                 <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-primary-hover transition-all">
                    <Icon name="person" className="!text-[20px]" />
                 </button>
              </div>
            )}
            
            <button className="md:hidden text-text-main">
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};