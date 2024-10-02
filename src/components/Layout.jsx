import React, { useContext, useState, createContext } from "react";
import Button from "react-bootstrap/Button";
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
      <div className="d-flex w-100">{children}</div>
    </LayoutProvider>
  );
};

function LayoutLeft({ children }) {
  const { isExpand } = useLayoutContext();
  return (
    <div className={`p-4 layout-overflow ${isExpand ? "col" : "col-8"}`}>
      {children}
    </div>
  );
}
function LayoutRight({ children }) {
  const { isExpand } = useLayoutContext();
  return (
    <div className={`layout-right px-4 ${isExpand ? "col" : "col-4"}`}>
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
