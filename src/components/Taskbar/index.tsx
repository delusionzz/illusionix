import { AnimatePresence, Variants, motion } from "framer-motion";
import { Moon, Sparkles, Github } from "lucide-react";
import { useState } from "react";
const container: Variants = {
  initial: { y: 10 },
  animate: { y: 0 },
  exit: { y: 10 },
};
const Menu: Variants = {
  initial: { y: 400 },
  animate: { y: 0 },
  exit: { y: 400 },
};
const Index: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col z-10 fixed bottom-0 w-full">
      {/* Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={Menu}
            initial="initial"
            animate="animate"
            exit={"exit"}
            transition={{
              type: "tween",
              ease: "circOut",
              duration: 0.6,
            }}
            className="bg-primary/25 glass w-96 h-96 p-3 rounded-tr-md flex border-accent/25"
          >
            <div className="flex flex-col space-y-4">
              <Sparkles className="text-slate-500 " />
              <Github className="text-gray-700" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        exit={"exit"}
        className="w-full h-11 bg-secondary z-20 flex items-center px-2 space-x-4"
      >
        <div className="p-2 hover:bg-accent/20 text-slate-500 hover:text-slate-400 transition-all rounded-md cursor-pointer">
          <Moon onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
