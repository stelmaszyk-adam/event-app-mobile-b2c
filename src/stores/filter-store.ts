import { create } from 'zustand';
import type { Category } from '../theme/tokens';

interface DateRange {
  start: string;
  end: string;
}

interface FilterState {
  categories: Category[];
  dateRange: DateRange | null;
  distanceKm: number | null;
  happeningNow: boolean;
  setCategories: (categories: Category[]) => void;
  toggleCategory: (category: Category) => void;
  setDateRange: (dateRange: DateRange | null) => void;
  setDistanceKm: (distance: number | null) => void;
  setHappeningNow: (happeningNow: boolean) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  categories: [],
  dateRange: null,
  distanceKm: null,
  happeningNow: false,
  setCategories: (categories) => set({ categories }),
  toggleCategory: (category) =>
    set((state) => ({
      categories: state.categories.includes(category)
        ? state.categories.filter((c) => c !== category)
        : [...state.categories, category],
    })),
  setDateRange: (dateRange) => set({ dateRange }),
  setDistanceKm: (distanceKm) => set({ distanceKm }),
  setHappeningNow: (happeningNow) => set({ happeningNow }),
  resetFilters: () =>
    set({ categories: [], dateRange: null, distanceKm: null, happeningNow: false }),
}));
