import React, { useState } from "react";
import LifeCycle from "./LifeCycle";

const LifeCycle2 = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>
      {showText && <LifeCycle />}
    </div>
  );
};

export default LifeCycle2;
