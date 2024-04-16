import { create } from "zustand";

export const Store = create((set) => ({
    isDark: false,
    setisDark: (state) => set({ isDark: state }),

    isopen: false,
    setisopen: (state) => set({ isopen: state }),

    seletedplayer: {},
    setselectedplayer: (state) => set({ selectedplayer: state }),
}));
