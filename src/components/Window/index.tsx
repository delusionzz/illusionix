import { motion, useDragControls } from "framer-motion";
import { ReactNode, useRef } from "react";
import { Circle } from "lucide-react";
const Index: React.FC<{
  title: string;
  icon: ReactNode | string;
  content: ReactNode | string;
  id: string;
  width?: number;
  height?: number;
}> = ({ title, icon, content, id, width, height }) => {
  // i dont know what type i should put for motion.div so only using div type for now
  const windowRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  return (
    <>
      <motion.div
        ref={windowRef}
        drag
        dragControls={dragControls}
        dragListener={false}
        dragMomentum={false}
        style={{
          width: `${width ? `${width}rem` : "40rem"}`,
          height: `${height ? `${height}rem` : "30rem"}`,
        }}
        data-id={id}
        className={`flex fixed z-[8] focus:z-[9] active:z-[9] flex-col resize p-2 left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] `}
      >
        <div
          className="bg-secondary cursor-move text-text select-none flex items-center px-2 rounded-t-sm justify-between"
          onPointerDown={(e) => {
            dragControls.start(e);
          }}
        >
          {typeof icon === "string" ? (
            <img src={icon} className="w-4 h-4" alt={`icon`} />
          ) : (
            icon
          )}
          <h1 className="select-none">{title}</h1>
          <div className="flex items-center space-x-1 p-1">
            <Circle className="text-yellow-500 fill-yellow-500 cursor-pointer w-4 h-4" />
            <Circle className="text-green-500 fill-green-500 cursor-pointer w-4 h-4" />
            <Circle
              className="text-red-500 fill-red-500 cursor-pointer w-4 h-4"
              onClick={() => windowRef.current?.remove()}
            />
          </div>
        </div>
        <div className="bg-primary/20 rounded-b-md h-full">
          {typeof content === "string" ? (
            // change this to proxy maybe ?
            <iframe
              src={content}
              className="border-none w-full h-full"
            ></iframe>
          ) : (
            content
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Index;
