import create from 'zustand';

interface FilterStore {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const filterStore = create<FilterStore>((set) => ({
  searchValue: '',
  setSearchValue: (value) => set({ searchValue: value })
}));
