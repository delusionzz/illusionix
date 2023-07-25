import { Calculator as ICalculator, Delete } from "lucide-react";
import { useState } from "react";
import { useId } from "react";
import { Window } from "..";

const Calculator = () => {
  const [WindowVisible, setWindowVisible] = useState(false);
  const id = useId();
  return (
    <>
      {WindowVisible && (
        <Window
          title="Calculator"
          icon={<ICalculator className="text-accent w-5 h-5" />}
          content={<App />}
          id={id}
          width={26}
          height={32}
        />
      )}
      <ICalculator
        className="text-accent cursor-pointer"
        onClick={() => setWindowVisible(!WindowVisible)}
      />
    </>
  );
};

const App = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-48 flex flex-col justify-center">
        <h1 className="text-right text-5xl pr-5 text-accent">0</h1>
        <div className="flex justify-between items-center px-5">
          <h2 className="text-text text-4xl ">=</h2>
          <h2 className="text-text">0 + 0</h2>
        </div>
      </div>
      <div className="grid grid-rows-5 grid-cols-4 gap-5 text-xl text-center p-2 select-none">
        {/* First row */}
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          C
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          + / -
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          %
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          /
        </div>
        {/* Second row */}
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          7
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          8
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          9
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          X
        </div>
        {/* Third row */}
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          4
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          5
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          6
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          -
        </div>
        {/* Fourth row */}
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          1
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          2
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          3
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          +
        </div>
        {/* Fifth Row */}
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          0
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          .
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text flex items-center justify-center bg-primary shadow-lg shadow-primary/50">
          <Delete className="w-6 h-6" />
        </div>
        <div className="p-2 cursor-pointer rounded-md text-text bg-primary shadow-lg shadow-primary/50">
          =
        </div>
      </div>
    </div>
  );
};

export default Calculator;
