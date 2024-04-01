import { create } from "zustand";

export const Store = create((set) => ({
    isDark: false,
    setisDark: (state) => set({ isDark: state }),
}));
