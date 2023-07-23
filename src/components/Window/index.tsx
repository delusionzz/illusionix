import { motion, useDragControls } from "framer-motion";

const Index = () => {
  const dragControls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      className="flex flex-col"
    >
      <div
        className="bg-white"
        onPointerDown={(e) => {
          dragControls.start(e);
        }}
      ></div>
    </motion.div>
  );
};

export default Index;
