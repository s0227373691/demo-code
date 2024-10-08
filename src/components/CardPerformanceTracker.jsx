import React from "react";
import TrackerList from "./TrackerList";
import CardWrapper from "./CardWrapper";

const CardPerformanceTracker = () => {
  return (
    <CardWrapper>
      <header className="d-flex align-items-center mb-3">
        <Icon />
        <span className="fs-2 px-2">Performance Tracker</span>
      </header>
      <TrackerList />
    </CardWrapper>
  );
};

export default CardPerformanceTracker;

function Icon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 2.90495C14.0697 2.90495 14.6667 2.30799 14.6667 1.57161C14.6667 0.835235 14.0697 0.238281 13.3333 0.238281C12.5969 0.238281 12 0.835235 12 1.57161C12 2.30799 12.5969 2.90495 13.3333 2.90495Z"
        fill="#FFDA1A"
      />
      <path
        d="M13.3867 2.37109V5.02163"
        stroke="#2D308A"
        strokeWidth="1.33333"
        strokeMiterlimit="10"
      />
      <path
        d="M2.72428 12.2389H6.87667V22.9056H2.72428V12.2389Z"
        fill="#2D308A"
        stroke="#2D308A"
        strokeWidth="1.33333"
      />
      <path
        d="M6.12249 23.9634V25.7633H0V14.9062H1.59453V23.9634H6.12249Z"
        fill="#FFDA1A"
      />
      <path
        d="M10.9528 6.23893H15.1052V22.9056H10.9528V6.23893Z"
        fill="#2D308A"
        stroke="#2D308A"
        strokeWidth="1.33333"
      />
      <path
        d="M14.351 23.962V25.762H8.22852V10.2383H9.82304V23.962H14.351Z"
        fill="#FFDA1A"
      />
      <path
        d="M19.1813 8.90495H23.3337L23.3337 22.9049H19.1813L19.1813 8.90495Z"
        fill="#2D308A"
        stroke="#2D308A"
        strokeWidth="1.33333"
      />
      <path
        d="M22.5795 23.9627V25.7626H16.457V11.5723H18.0516V23.9627H22.5795Z"
        fill="#FFDA1A"
      />
    </svg>
  );
}
