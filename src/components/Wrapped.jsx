import React from "react";

const Wrapped = ({ children }) => {
  return (
    <div className="flex-grow-1 p-3 col-12 col-xxl-6">
      <div className="wrapped h-100 p-4 rounded">{children}</div>
    </div>
  );
};

export default Wrapped;
