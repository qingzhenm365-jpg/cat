import React from 'react';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-[#f3ece7] dark:border-[#3e2d23] bg-white dark:bg-surface-dark py-10 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Icon name="pets" className="text-primary text-xl" />
          <span className="font-bold text-text-main dark:text-white text-lg">Cat Paradise</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Contact Us</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all">
            <Icon name="public" className="text-sm" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all">
            <Icon name="share" className="text-sm" />
          </a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-8 text-center text-xs text-text-accent">
        © 2023 Cat Paradise. All rights reserved.
      </div>
    </footer>
  );
};