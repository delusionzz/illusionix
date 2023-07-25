import { Eye, EyeOff } from "lucide-react";
import { useState, useCallback } from "react";
import { useSettingState } from "../../stores";
import { Variants, motion } from "framer-motion";

const container: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Index = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [Password, setPassword] = useState<string>("");
  const { settings, change } = useSettingState();

  const authHandler = useCallback(() => {
    if (Password.length < 3) return;

    if (settings.auth.password === "") {
      change({
        ...settings,
        auth: {
          loggedIn: true,
          password: Password,
        },
      });
    }

    if (Password === settings.auth.password) {
      change({
        ...settings,
        auth: {
          loggedIn: true,
          password: settings.auth.password,
        },
      });
    }
    return;
    // eslint-disable-next-line
  }, [Password]);

  return (
    <>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        exit={"exit"}
        className="w-full min-h-screen absolute z-20 bg-black/30 backdrop-blur-sm"
      ></motion.div>

      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        exit={"exit"}
        className="w-full absolute z-[99999] min-h-screen flex items-center justify-center"
      >
        <div className="absolute left-5 bottom-5 z-[99999]">
          <h1 className="text-text/50">
            Using the{" "}
            <span
              className="shadow-lg"
              style={{ color: settings.bash.theme.accent }}
            >
              {settings.bash.theme.title}
            </span>{" "}
            Theme
          </h1>
        </div>
        <div className="bg-primary/25 rounded-2xl w-80 h-80 md:w-[25rem] md:h-96 flex flex-col items-center justify-center space-y-5">
          <div className="flex flex-col space-y-4 items-center">
            <img
              src="/Illusionix.png"
              alt="Logo"
              className="h-20 w-20 rounded-full select-none"
            />
            <h1 className="text-text text-xl">
              {settings.auth.password ? "Login" : "Create a new account"}
            </h1>
          </div>
          <div className="flex space-x-3 border border-accent rounded-lg p-1 items-center select-text">
            <input
              className="bg-transparent pl-1 outline-none text-text placeholder:text-text/40 h-8  "
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
              maxLength={32}
              onKeyDown={(e) => {
                if (e.key === "Enter") authHandler();
              }}
            />
            {showPassword ? (
              <Eye
                className="cursor-pointer text-accent"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeOff
                className="cursor-pointer text-accent"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
