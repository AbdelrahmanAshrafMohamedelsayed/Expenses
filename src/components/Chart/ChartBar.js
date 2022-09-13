import React from "react";
import "./ChartBar.css";
function ChartBar(props) {
  let hightBar = "0%";
  if (props.maxvalue > 0) {
    hightBar = Math.round((+props.value / +props.maxvalue) * 100) + "%";
    if (+props.value === 450) {
      console.log("object", Math.round(+props.value / +props.maxvalue));
    }
    console.log(props.value);
  }
  // console.log(props.value, props.label);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: hightBar,
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
