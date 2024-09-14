import create from 'zustand';

interface ProductState {
  products: any[];
  setProducts: (products: any[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
