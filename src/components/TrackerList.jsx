import React from "react";
import Tracker from "./Tracker";

const trackerData = [
  { key: 1, name: "Math", count: 640, start: 800, end: 200, len: 60 },
  { key: 2, name: "Reading", count: 320, start: 400, end: 100, len: 60 },
  { key: 3, name: "Writing", count: 320, start: 400, end: 100, len: 60 },
];
const TrackerList = () => {
  return (
    <div>
      {trackerData.map((tracker) => (
        <Tracker key={tracker.key} {...tracker} />
      ))}
    </div>
  );
};

export default TrackerList;
