import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SettingState {
  settings: Settings;
  change: (setting: Partial<Settings>) => void;
}

const useSettingState = create<SettingState>()(
  devtools(
    persist(
      (set) => ({
        settings: {
          auth: { password: "", loggedIn: false },
          bash: {
            prompt: "%RightArrow% ",
            theme: {
              title: "default",
              background: "#0e0c12",
              accent: "#726293",
              primary: "#3a2f51",
              secondary: "#131018",
              text: "#e7e3ed",
              transparency: "100%",
            },
          },
        },
        change: (setting) =>
          set((state) => ({
            settings: {
              ...state.settings,
              ...setting,
            },
          })),
      }),
      {
        name: "settings",
      }
    )
  )
);

export default useSettingState;

type Settings = {
  auth: Auth;
  bash: Bash;
};

type Auth = {
  password: string;
  loggedIn: boolean;
};

type Bash = {
  prompt: string;
  theme: Theme;
};

type Theme = {
  title: string;
  primary: string;
  secondary: string;
  text: string;
  background: string;
  accent: string;
  transparency: string;
};

/**
 * settings: {
 *
 * }
 */
