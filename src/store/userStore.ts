import { create } from "zustand";
import { devtools } from 'zustand/middleware'

interface IUserStore {
    user: null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setUser: (data: any) => void
}

export const userStore = create<IUserStore>()(devtools(
    (set) => ({
        user: null,
        
        setUser: (data) => set({user: data})
    })
))