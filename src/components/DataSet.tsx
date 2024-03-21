import { Chart } from "react-google-charts";

// random data
const data = [
  ["Year", "Sales", "Revenue"],
  ["2001", 1050, 950],
  ["2004", 1170, 460],
  ["2010", 680, 450],
  ["2012", 1030, 640],
];

// labels or titles for the same data
const options = {
  title: "Online Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

// will be tied to a random node in flow chart
// probably node 18
export function RandomChart() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="80%"
      data={data}
      options={options}
    />
  );
}
