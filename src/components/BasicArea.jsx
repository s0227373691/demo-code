import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicArea() {
  return (
    <>
      <header className="mb-3">
        <h2 className="text-left">SAT Score Distribution</h2>
        <h4 className="text-left">Higher than 94% of students</h4>
      </header>
      <div className="d-flex justify-content-center">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [3000, 3500, 4500, 5000, 8000, 12000],
              area: true,
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </>
  );
}
