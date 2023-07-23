import { useEffect } from "react";
import { Auth, Taskbar } from "./components";
import { useSettingState } from "./stores";
import { AnimatePresence } from "framer-motion";
function App() {
  const { settings, change } = useSettingState();
  useEffect(() => {
    change({
      ...settings,
      auth: {
        loggedIn: false,
        password: settings.auth.password,
      },
    });
  }, []);

  return (
    <main className="w-full min-h-screen">
      <AnimatePresence mode="wait">
        {settings.auth.loggedIn ? (
          <div className="flex flex-col">
            <div className="min-h-screen w-full">text</div>
            <Taskbar />
          </div>
        ) : (
          <Auth />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
