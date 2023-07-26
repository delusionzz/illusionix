import { useEffect, useRef } from "react";
import { Auth, Taskbar } from "./components";
import { useSettingState, useWindowStore } from "./stores";
import { AnimatePresence } from "framer-motion";
import { Calculator } from "./components/Apps";
import { Window } from "./components";
function App() {
  const { settings, change } = useSettingState();
  const { windows } = useWindowStore();
  const constraintsRef = useRef(null);

  useEffect(() => {
    change({
      ...settings,
      auth: {
        loggedIn: false,
        password: settings.auth.password,
      },
    });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="w-full min-h-screen" ref={constraintsRef}>
      <AnimatePresence mode="wait">
        {settings.auth.loggedIn ? (
          <div className="flex flex-col">
            {windows.map((window, i) => {
              return (
                <Window
                  key={i}
                  title={window.title as string}
                  content={window.content}
                  icon={window.icon}
                  id={window.id as string}
                />
              );
            })}
            <div className="min-h-screen w-full"></div>
            <Taskbar>
              <Calculator />
            </Taskbar>
          </div>
        ) : (
          <Auth />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
