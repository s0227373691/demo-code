import React from "react";
import TrackerList from "./TrackerList";
import Container from "./Wrapped";

const PerformanceTracker = () => {
  return (
    <>
      <header className="mb-3">
        <h2 className="text-left">PerformanceTracker</h2>
      </header>
      <TrackerList />
    </>
  );
};

export default PerformanceTracker;
