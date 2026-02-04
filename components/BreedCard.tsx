import React from 'react';
import { Breed } from '../types';
import { Icon } from './Icon';

interface BreedCardProps {
  breed: Breed;
  variant?: 'home' | 'directory';
}

export const BreedCard: React.FC<BreedCardProps> = ({ breed, variant = 'home' }) => {
  const isDirectory = variant === 'directory';

  return (
    <div className="group flex flex-col bg-background-light dark:bg-[#3e2d23] rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer h-full">
      {/* Image Container */}
      <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden">
        <img 
          src={breed.image} 
          alt={breed.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm text-gray-800">
          <Icon name="favorite" className="!text-[14px] text-primary" fill /> 
          {breed.rating}
        </div>

        {/* Directory Specific: Popular/Rare Badge */}
        {isDirectory && breed.badges && breed.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {breed.badges.map(badge => (
              <span key={badge} className={`
                px-2 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase shadow-sm
                ${badge === 'POPULAR' ? 'bg-[#ffebd4] text-orange-800' : 'bg-[#e2e8f0] text-slate-700'}
              `}>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-text-main dark:text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors">
            {breed.name}
          </h3>
        </div>
        
        {isDirectory ? (
           <p className="text-text-muted dark:text-[#b0a69e] text-sm leading-relaxed mb-4 line-clamp-3">
             {breed.longDescription}
           </p>
        ) : (
          <p className="text-text-accent dark:text-[#b0a69e] text-sm font-medium mb-4">
            {breed.description}
          </p>
        )}

        <div className="mt-auto flex gap-2 flex-wrap">
          {breed.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-white dark:bg-black/20 text-text-muted dark:text-[#d3cdc8] text-xs px-2 py-1 rounded-md font-medium border border-gray-100 dark:border-transparent">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};