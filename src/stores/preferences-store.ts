import { create } from 'zustand';

interface PreferencesState {
  theme: 'light' | 'dark' | 'system';
  locale: 'pl' | 'en';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setLocale: (locale: 'pl' | 'en') => void;
}

export const usePreferencesStore = create<PreferencesState>((set) => ({
  theme: 'system',
  locale: 'pl',
  setTheme: (theme) => set({ theme }),
  setLocale: (locale) => set({ locale }),
}));
