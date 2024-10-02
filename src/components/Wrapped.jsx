import React from "react";

const Wrapped = ({ children }) => {
  return (
    <div className="p-2 col-12 col-xxl-6">
      <div className="wrapped p-4 mb-4 rounded">{children}</div>
    </div>
  );
};

export default Wrapped;
