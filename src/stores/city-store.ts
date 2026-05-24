import { create } from 'zustand';

interface City {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface CityState {
  selectedCity: City | null;
  setSelectedCity: (city: City | null) => void;
}

export const useCityStore = create<CityState>((set) => ({
  selectedCity: null,
  setSelectedCity: (selectedCity) => set({ selectedCity }),
}));
