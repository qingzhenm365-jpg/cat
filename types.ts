export interface Breed {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  rating: number;
  tags: string[];
  badges?: string[];
  coatLength?: 'Short' | 'Medium' | 'Long';
  size?: 'Small' | 'Medium' | 'Large';
  activityLevel?: 'Low' | 'Medium' | 'High';
  isRare?: boolean;
}

export type ViewState = 'HOME' | 'DIRECTORY';

export interface FilterState {
  coatLength: string[];
  size: string[];
  activityLevel: string[];
}