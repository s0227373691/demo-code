import React, { useContext, useState, createContext } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";

const LayoutContext = createContext(null);

export const LayoutProvider = ({ children }) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <LayoutContext.Provider value={{ isExpand, setIsExpand }}>
      {children}
    </LayoutContext.Provider>
  );
};

const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("LayoutContext can not null");
  }
  return context;
};

const Layout = ({ children }) => {
  return (
    <LayoutProvider>
      <div className="d-flex col-12">{children}</div>
    </LayoutProvider>
  );
};

function LayoutLeft({ children }) {
  const { isExpand } = useLayoutContext();
  return (
    <div className={`layout-overflow p-4 ${isExpand ? "col-8" : "col-10"}`}>
      {children}
    </div>
  );
}
function LayoutRight({ children }) {
  const { isExpand } = useLayoutContext();
  return (
    <div className={`layout-right px-4 ${isExpand ? "col-4" : "col-2"}`}>
      {children}
    </div>
  );
}

const ExpandButton = () => {
  const { setIsExpand } = useLayoutContext();
  const handleExpand = () => setIsExpand((prev) => !prev);
  return (
    <div
      variant="secondary"
      className="position-absolute top-3 end-0"
      onClick={handleExpand}
    >
      <AiOutlineExpandAlt size={30} />
    </div>
  );
};

Layout.Left = LayoutLeft;
Layout.Right = LayoutRight;
Layout.RightExpandButton = ExpandButton;

export default Layout;
