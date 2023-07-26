import { ReactNode } from "react";
import { create } from "zustand";

interface WindowState {
  windows: WindowMeta[];
  add: (window: WindowMeta) => void;
  remove: (id: string) => void;
}

type WindowMeta = {
  id?: string;
  title?: string;
  icon?: ReactNode | string;
  content?: ReactNode | string;
};

const useWindowStore = create<WindowState>()((set) => ({
  windows: [],
  add: (meta) =>
    set((state) => ({
      windows: [...state.windows, meta],
    })),
  remove: (id) =>
    set((state) => ({
      windows: state.windows.filter((win) => win.id !== id),
    })),
}));

export default useWindowStore;
