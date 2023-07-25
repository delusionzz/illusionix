import { motion, useDragControls } from "framer-motion";
import { RefObject, useState, ReactNode } from "react";
import { Circle } from "lucide-react";
const Index: React.FC<{
  title: string;
  icon: string;
  contraint: RefObject<Element>;
  content: ReactNode | string;
}> = ({ title, icon, contraint, content }) => {
  const dragControls = useDragControls();
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <motion.div
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          dragConstraints={contraint}
          className="flex flex-col w-[40rem] h-[30rem]"
        >
          <div
            className="bg-secondary text-text select-none flex items-center px-2 rounded-t-sm justify-between"
            onPointerDown={(e) => {
              dragControls.start(e);
            }}
          >
            <img src={icon} className="w-4 h-4" alt={`icon`} />
            <h1>{title}</h1>
            <div className="flex items-center space-x-1 p-1">
              <Circle className="text-yellow-500 fill-yellow-500 cursor-pointer w-4 h-4" />
              <Circle className="text-green-500 fill-green-500 cursor-pointer w-4 h-4" />
              <Circle
                className="text-red-500 fill-red-500 cursor-pointer w-4 h-4"
                onClick={() => setVisible(false)}
              />
            </div>
          </div>
          <div className="bg-primary/20 rounded-b-md h-full">
            {typeof content === "string" ? (
              <iframe
                src={content}
                className="border-none w-full h-full"
              ></iframe>
            ) : (
              content
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Index;
