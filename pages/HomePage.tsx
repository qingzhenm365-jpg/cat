import React from 'react';
import { ViewState, Breed } from '../types';
import { HERO_IMAGE, BREEDS } from '../constants';
import { BreedCard } from '../components/BreedCard';
import { Icon } from '../components/Icon';

interface HomePageProps {
  onNavigate: (view: ViewState) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Show only 4 breeds on homepage
  const featuredBreeds = BREEDS.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col justify-center py-10 lg:py-20 px-4 md:px-10">
        <div className="flex flex-col max-w-[1200px] w-full mx-auto">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10">
              <div className="flex flex-col gap-4 text-left">
                <span className="text-primary font-bold tracking-wider uppercase text-xs">The Ultimate Cat Encyclopedia</span>
                <h1 className="text-text-main text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                  Find Your <span className="text-primary">Purr-fect</span> Companion
                </h1>
                <h2 className="text-text-muted text-lg font-medium leading-relaxed max-w-[500px]">
                  Explore our complete encyclopedia of cat breeds, care tips, behavior guides, and more.
                </h2>
              </div>

              {/* Search Component */}
              <div className="flex flex-col w-full max-w-[500px] mt-4">
                <label className="relative flex w-full items-center group">
                  <div className="absolute left-4 text-text-accent flex items-center justify-center pointer-events-none">
                    <Icon name="search" />
                  </div>
                  <input 
                    className="w-full h-14 md:h-16 pl-12 pr-36 rounded-2xl bg-white border-2 border-transparent focus:border-primary/30 focus:ring-4 focus:ring-primary/10 outline-none text-text-main placeholder-text-accent shadow-sm text-base transition-all" 
                    placeholder="Search for Maine Coon, Siamese..." 
                  />
                  <div className="absolute right-2 top-2 bottom-2">
                    <button 
                        onClick={() => onNavigate('DIRECTORY')}
                        className="h-full px-6 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-sm shadow-sm transition-transform active:scale-95 flex items-center justify-center"
                    >
                      Find Breed
                    </button>
                  </div>
                </label>
                <div className="mt-3 flex gap-2 text-sm text-text-accent">
                  <span>Popular:</span>
                  <button onClick={() => onNavigate('DIRECTORY')} className="underline hover:text-primary transition-colors">Persian</button>,
                  <button onClick={() => onNavigate('DIRECTORY')} className="underline hover:text-primary transition-colors">Bengal</button>,
                  <button onClick={() => onNavigate('DIRECTORY')} className="underline hover:text-primary transition-colors">Sphynx</button>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#fcece2] rounded-[3rem] rotate-3 scale-95 z-0 transform origin-bottom-right"></div>
              <div 
                className="relative w-full aspect-[4/3] bg-center bg-cover bg-no-repeat rounded-[3rem] shadow-xl z-10 overflow-hidden" 
                style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 md:bottom-8 md:-left-8 z-20 bg-white p-4 rounded-2xl shadow-lg max-w-[200px] animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Icon name="verified" className="!text-[20px]" />
                  </div>
                  <div>
                    <p className="text-xs text-text-accent font-bold uppercase">Database</p>
                    <p className="text-sm font-bold text-text-main">70+ Breeds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 px-4 md:px-10 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-text-main text-3xl font-extrabold tracking-tight">Most Popular Breeds</h2>
            <button 
                onClick={() => onNavigate('DIRECTORY')}
                className="hidden sm:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all"
            >
              View All <Icon name="arrow_forward" className="!text-sm" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
            {featuredBreeds.map(breed => (
                <BreedCard key={breed.id} breed={breed} variant="home" />
            ))}
          </div>

          <div className="mt-6 flex justify-center sm:hidden">
            <button 
                onClick={() => onNavigate('DIRECTORY')}
                className="px-6 py-3 bg-background-light text-text-main rounded-xl font-bold text-sm w-full text-center"
            >
              View All Breeds
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-primary/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-2 shadow-sm">
                <Icon name="mark_email_unread" className="!text-[32px]" />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-text-main text-3xl md:text-4xl font-black tracking-tight">
                  Get Daily Cat Facts
                </h2>
                <p className="text-text-muted text-lg font-medium">
                  Join our newsletter for the latest breed info, care tips, and adorable photos delivered to your inbox.
                </p>
              </div>
              
              <form className="flex w-full max-w-[480px] flex-col sm:flex-row gap-3 mt-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                    className="flex-1 px-6 h-14 rounded-xl bg-white border-none focus:ring-4 focus:ring-primary/20 placeholder-text-accent text-text-main outline-none" 
                    placeholder="Enter your email address" 
                    type="email" 
                />
                <button className="h-14 px-8 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-all shadow-md active:scale-95 whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-text-accent mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};