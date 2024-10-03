import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { AreaPlot } from "@mui/x-charts";

const ScoreDistributionChart = () => {
  const seriesData = [
    {
      id: "line-id",
      type: "line",
      color: "rgb(45, 48, 138)",
      area: true,
      data: [3000, 3500, 4500, 5000, 8000, 12000],
    },
  ];
  const xAxisData = [
    {
      data: [1000, 3000, 6000, 9000, 12000, 15000],
      scaleType: "point",
      id: "x-axis-id",
    },
  ];
  const yAxisData = [
    {
      data: [30000, 20000, 15000, 10000, 5000, 0],
      id: "y-axis-id",
      scaleType: "linear",
    },
  ];
  return (
    <ResponsiveChartContainer
      series={seriesData}
      xAxis={xAxisData}
      yAxis={yAxisData}
    >
      <LinePlot />
      <AreaPlot />
      {/* <ChartsReferenceLine
            x={3000}
            label="Max PV PAGE"
            lineStyle={{ stroke: "red" }}
          />
          <ChartsReferenceLine
            y={9800}
            label="Max"
            lineStyle={{ stroke: "red" }}
          /> */}

      <ChartsXAxis position="bottom" axisId="x-axis-id" />
      <ChartsYAxis label="Task Tackers" position="left" axisId="y-axis-id" />
    </ResponsiveChartContainer>
  );
};

export default ScoreDistributionChart;
