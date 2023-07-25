import { useEffect, useRef } from "react";
import { Auth, Taskbar } from "./components";
import { useSettingState } from "./stores";
import { AnimatePresence } from "framer-motion";
import { Calculator } from "./components/Apps";

function App() {
  const { settings, change } = useSettingState();
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
    <main className="w-full min-h-screen">
      <AnimatePresence mode="wait">
        {settings.auth.loggedIn ? (
          <div className="flex flex-col">
            <div className="min-h-screen w-full" ref={constraintsRef}></div>
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
