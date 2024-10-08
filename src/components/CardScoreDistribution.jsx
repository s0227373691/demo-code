import React from "react";
import CardWrapper from "./CardWrapper";
import ScoreDistributionChart from "./ScoreDistributionChart";

const CardScoreDistribution = () => {
  return (
    <CardWrapper>
      <header className="d-flex mb-3">
        <Icon />
        <div className="px-2">
          <h3 className="mb-2 fs-2 lh-1">SAT Score Distribution</h3>
          <h5 className="fs-4 lh-1 text-start">Higher than 94% of students</h5>
        </div>
      </header>
      <div
        className="d-flex justify-content-center w-100 "
        style={{ height: "300px" }}
      >
        <ScoreDistributionChart />
      </div>
    </CardWrapper>
  );
};

export default CardScoreDistribution;

function Icon() {
  return (
    <svg
      width="35"
      height="34"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5545 23.9733C17.6757 23.9733 22.6379 19.0111 22.6379 12.89C22.6379 10.5047 21.8844 8.29541 20.6024 6.48716L18.8282 8.26134C19.681 9.59854 20.1751 11.1867 20.1751 12.8902C20.1751 17.6511 16.3157 21.5106 11.5548 21.5106C6.79388 21.5106 2.93441 17.6511 2.93441 12.8902C2.93441 8.12933 6.79388 4.26986 11.5548 4.26986C13.3461 4.26986 15.0098 4.81625 16.3884 5.75146L18.1546 3.98521C16.3108 2.6164 14.0273 1.80664 11.5545 1.80664C5.43337 1.80664 0.471191 6.76882 0.471191 12.89C0.471191 19.0111 5.43337 23.9733 11.5545 23.9733ZM14.6019 7.53787C13.7036 7.02544 12.6638 6.73267 11.5555 6.73267C8.15488 6.73267 5.39811 9.48943 5.39811 12.8901C5.39811 16.2907 8.15488 19.0475 11.5555 19.0475C14.9562 19.0475 17.7129 16.2907 17.7129 12.8901C17.7129 11.8708 17.4653 10.9094 17.0268 10.0627L15.1317 11.9578C15.2092 12.2557 15.2504 12.5682 15.2504 12.8902C15.2504 14.9306 13.5963 16.5847 11.5559 16.5847C9.51555 16.5847 7.86149 14.9306 7.86149 12.8902C7.86149 10.8499 9.51555 9.1958 11.5559 9.1958C11.9729 9.1958 12.3737 9.26488 12.7476 9.39221L14.6019 7.53787Z"
        fill="#2D308A"
      />
      <circle cx="11.5562" cy="12.8906" r="1.75" fill="#FFD600" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.5287 1.95744L22.635 1.92139L20.9607 3.5956L20.9605 3.59533L22.6346 1.9212L22.5986 0.0274251L19.812 2.81401L19.8257 3.53349L11.4255 11.9336L12.663 13.1711L21.1022 4.73184L21.7421 4.74402L24.5287 1.95744Z"
        fill="#2D308A"
      />
    </svg>
  );
}
