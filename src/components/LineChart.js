import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
const LineChart = (props) => {
  const { data, dataKey, nodes } = props;
  const stroke = ["red", "blue", "green", "yellow"];
  return (
    <>
      <AreaChart
        width={730}
        height={230}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        {/* <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs> */}
        <XAxis dataKey="Time" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {nodes && (
          nodes.map((node, index) => {
            return (
              <Area
                key ={index}
                type="monotone"
                dataKey={dataKey[index]}
                stroke={stroke[index]}
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            );
          })
        )}
      </AreaChart>
    </>
  );
};

export default LineChart;
