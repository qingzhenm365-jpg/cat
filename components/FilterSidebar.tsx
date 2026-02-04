import React, { useState } from 'react';
import { Icon } from './Icon';

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="border-b border-gray-100 py-4 last:border-0">
            <button 
                className="flex items-center justify-between w-full mb-3 group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-text-main text-sm">{title}</span>
                <Icon name="expand_more" className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="flex flex-col gap-2">
                    {children}
                </div>
            )}
        </div>
    );
};

const Checkbox: React.FC<{ label: string }> = ({ label }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative w-5 h-5 rounded border border-gray-300 transition-colors group-hover:border-primary flex items-center justify-center bg-white">
            <input type="checkbox" className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" />
            <Icon name="check" className="text-primary opacity-0 peer-checked:opacity-100 !text-[16px] pointer-events-none" />
        </div>
        <span className="text-sm text-text-muted group-hover:text-text-main transition-colors select-none">{label}</span>
    </label>
);

export const FilterSidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6">
      {/* Filters Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-lg text-text-main">Filters</h3>
        <button className="text-xs font-bold text-primary hover:underline">Reset All</button>
      </div>

      {/* Accordions */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <FilterSection title="Coat Length">
            <Checkbox label="Short" />
            <Checkbox label="Medium" />
            <Checkbox label="Long" />
            <Checkbox label="Hairless" />
        </FilterSection>
        <FilterSection title="Size">
            <Checkbox label="Small" />
            <Checkbox label="Medium" />
            <Checkbox label="Large" />
        </FilterSection>
        <FilterSection title="Activity Level">
            <Checkbox label="Low" />
            <Checkbox label="Medium" />
            <Checkbox label="High" />
            <Checkbox label="Hyperactive" />
        </FilterSection>
      </div>

      {/* Quiz CTA */}
      <div className="bg-[#fcf4ed] rounded-2xl p-6 border border-primary/10">
        <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-4">
            <Icon name="quiz" />
        </div>
        <h4 className="font-bold text-text-main mb-2">Not sure which breed?</h4>
        <p className="text-sm text-text-muted mb-4">Take our 2-minute quiz to find your perfect feline companion.</p>
        <button className="w-full bg-white border-2 border-transparent hover:border-primary text-text-main font-bold py-2.5 rounded-xl shadow-sm transition-all text-sm">
            Start Quiz
        </button>
      </div>
    </aside>
  );
};