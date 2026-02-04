import React from 'react';
import { ViewState } from '../types';
import { BREEDS } from '../constants';
import { BreedCard } from '../components/BreedCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { Icon } from '../components/Icon';

interface DirectoryPageProps {
  onNavigate: (view: ViewState) => void;
}

export const DirectoryPage: React.FC<DirectoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-8">
      
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2 text-sm font-medium text-text-accent">
            <button onClick={() => onNavigate('HOME')} className="hover:text-primary transition-colors">Home</button>
            <Icon name="chevron_right" className="!text-xs" />
            <span className="text-text-main">Breeds</span>
        </div>
        <h1 className="text-4xl font-black text-text-main tracking-tight mt-2">Cat Breed Encyclopedia</h1>
        <p className="text-text-muted max-w-2xl text-lg mt-2">
            Discover detailed profiles, temperament traits, and care guides for over 70 unique cat breeds.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar */}
        <FilterSidebar />

        {/* Main Content */}
        <div className="flex-1">
            
            {/* Results Bar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <span className="font-bold text-text-main">
                    <span className="text-primary">{124}</span> breeds found
                </span>
                
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-text-muted font-medium">Sort by:</span>
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-sm font-bold text-text-main bg-background-light px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                Most Popular <Icon name="expand_more" className="!text-sm" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex bg-background-light p-1 rounded-lg">
                        <button className="p-1.5 bg-white shadow-sm rounded-md text-primary">
                            <Icon name="grid_view" className="!text-[20px]" />
                        </button>
                        <button className="p-1.5 text-text-accent hover:text-text-main">
                            <Icon name="view_list" className="!text-[20px]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {BREEDS.map(breed => (
                    <BreedCard key={breed.id} breed={breed} variant="directory" />
                ))}
            </div>

            {/* Load More */}
            <div className="mt-12 flex flex-col items-center gap-4">
                <button className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-bold shadow-lg shadow-primary/30 transition-all active:scale-95">
                    Load More Breeds
                </button>
                <div className="flex flex-col items-center gap-2 w-full max-w-[200px]">
                     <span className="text-xs text-text-accent font-bold">Showing 6 of 124 breeds</span>
                     <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[5%]" />
                     </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};