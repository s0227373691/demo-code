import React from "react";
import Tracker from "./Tracker";

const trackerData = [
  { id: 1, name: "Math", count: 640, start: 800, end: 200, len: 60 },
  { id: 2, name: "Reading", count: 320, start: 400, end: 100, len: 60 },
  { id: 3, name: "Writing", count: 320, start: 400, end: 100, len: 60 },
];
const TrackerList = () => {
  return (
    <div>
      {trackerData.map((tracker) => (
        <Tracker key={tracker.id} {...tracker} />
      ))}
    </div>
  );
};

export default TrackerList;
