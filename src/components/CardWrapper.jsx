import React from "react";
import { useLayoutContext } from "./Layout";

const CardWrapper = ({ children }) => {
  const { isExpand } = useLayoutContext();
  return (
    <div className={`flex-grow-1 p-3 col-12  ${!isExpand && "col-xxl-6"}`}>
      <div className="wrapped h-100 p-4 rounded">{children}</div>
    </div>
  );
};

export default CardWrapper;
