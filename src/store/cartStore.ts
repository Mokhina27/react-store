import create from 'zustand';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  images?: string[];
  description?: string;
  category?: string;
  stock?: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getQuantity: (id: number) => number;
}

const LOCAL_STORAGE_KEY = 'cart-items';

const loadCartFromLocalStorage = (): CartItem[] => {
  const cartData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return cartData ? JSON.parse(cartData) : [];
};

const saveCartToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};

export const useCartStore = create<CartState>((set, get) => ({
  items: loadCartFromLocalStorage(),

  addToCart: (item) => {
    const { items } = get();
    const existingItem = items.find(i => i.id === item.id);
    let updatedItems;
    if (existingItem) {
      updatedItems = items.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedItems = [...items, { ...item, quantity: 1 }];
    }
    saveCartToLocalStorage(updatedItems);
    set({ items: updatedItems });
  },

  removeFromCart: (id) => {
    const { items } = get();
    const updatedItems = items.filter(item => item.id !== id);
    saveCartToLocalStorage(updatedItems);
    set({ items: updatedItems });
  },

  increaseQuantity: (id) => {
    const { items } = get();
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCartToLocalStorage(updatedItems);
    set({ items: updatedItems });
  },

  decreaseQuantity: (id) => {
    const { items } = get();
    const updatedItems = items
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0);
    saveCartToLocalStorage(updatedItems);
    set({ items: updatedItems });
  },

  clearCart: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    set({ items: [] });
  },

  getQuantity: (id) => {
    const { items } = get();
    const item = items.find(i => i.id === id);
    return item ? item.quantity : 0;
  }
}));
