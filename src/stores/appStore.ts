// This store will store all the current apps open for ease of use across components
// ie task bar and such, we may not use this but i cant seem to figure out how i can do it without this

import { create } from "zustand";
import { devtools } from "zustand/middleware";

// type App = {
//   title: string;
//   image: string;
// };

type AppState = {
  apps: {};
  setApps: (app: {}) => void;
};

const useAppStore = create<AppState>()(
  devtools((set) => ({
    apps: 0,
    setApps: (by) =>
      set((state) => ({
        apps: {
          ...by,
          ...state.apps,
        },
      })),
  }))
);

export default useAppStore;
