import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  let arrValues = props.data.map((el) => el.value);
  let mx = Math.max(...arrValues);
  // console.log(props.data);
  return (
    <div className="chart">
      {props.data.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          label={item.label}
          maxvalue={mx}
        />
      ))}
    </div>
  );
}

export default Chart;
