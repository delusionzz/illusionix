import { Settings as ISettings } from "lucide-react";
import { useWindowStore } from "../../stores";
import { useState } from "react";
import _ from "lodash";
const Settings = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const { add } = useWindowStore();
  const id = _.uniqueId("window_");

  return (
    <>
      <ISettings
        className="text-gray-400 w-10 h-10 rounded-md cursor-pointer p-2 hover:text-gray-200 hover:bg-slate-400/25 transition-all"
        onClick={() => {
          if (hasWindow) return;
          add({
            title: "Settings",
            content: <App />,
            icon: <ISettings className="text-accent w-5 h-5" />,
            id: id,
          });
          setHasWindow(true);
        }}
      />
    </>
  );
};

const App = () => {
  return <></>;
};

export default Settings;
