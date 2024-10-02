import React from "react";
import TrackerList from "./TrackerList";
const PerformanceTracker = () => {
  return (
    <div className="performance-tracker p-4 rounded border border-3 border-light flex-fill">
      <header className="mb-3">
        <h2 className="text-left">PerformanceTracker</h2>
      </header>
      <TrackerList />
    </div>
  );
};

export default PerformanceTracker;
