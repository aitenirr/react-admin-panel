import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Typography, TextField } from "@mui/material";

function SalesChart() {
  const data = [
    {
      name: "JAN",
      uv: 99,
      pv: 81,
      amt: 9,
      znak: 54,
    },
    {
      name: "FUB",
      uv: 90,
      pv: 72,
      amt: 9,
      znak: 63,
    },
    {
      name: "MAR",
      uv: 99,
      pv: 90,
      amt: 9,
      znak: 72,
    },
    {
      name: "APR",
      uv: 90,
      pv: 72,
      amt: 9,
      znak: 81,
    },
    {
      name: "JUN",
      uv: 99,
      pv: 81,
      amt: 9,
      znak: 90,
    },
    {
      name: "JUL",
      uv: 90,
      pv: 72,
      amt: 9,
      znak: 99,
    },
    {
      name: "AUG",
      uv: 99,
      pv: 81,
      amt: 9,
      znak: 100,
    },
  ];
  return (
    <ResponsiveContainer
      width="100%"
      height={450}
      style={{ background: "white", borderRadius: "15px" }}
    >
      <div
        style={{
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: "15px",
        }}
      >
        <Box></Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <CircleIcon sx={{ color: "#3A57E8" }} />
            <Typography>Sales</Typography>
          </Box>
          <Box sx={{ display: "flex", pl: "20px" }}>
            <CircleIcon sx={{ color: "#85F4FA" }} />
            <Typography>Cost</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "#8A92A6" }}>This Week</Typography>
          <TextField select />
        </Box>
      </div>

      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, bottom: 0, left: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          strokeWidth={2}
          dataKey="uv"
          stroke="#3A57E8"
          fill="#fff"
        />

        <Area
          type="monotone"
          strokeWidth={2}
          dataKey="pv"
          stroke="#85F4FA"
          fill="#fff"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SalesChart;
