import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Box,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function Conversion() {
  const data = [
    {
      name: "S",
      uv: 40,
      pv: 20,
      amt: 10,
    },
    {
      name: "M",
      uv: 80,
      pv: 60,
      amt: 10,
    },
    {
      name: "T",
      uv: 85,
      pv: 40,
      amt: 10,
    },
    {
      name: "W",
      uv: 90,
      pv: 60,
      amt: 10,
    },
    {
      name: "T",
      uv: 85,
      pv: 45,
      amt: 10,
    },
    {
      name: "F",
      uv: 85,
      pv: 45,
      amt: 10,
    },
    {
      name: "S",
      uv: 85,
      pv: 45,
      amt: 10,
    },
    {
      name: "M",
      uv: 30,
      pv: 60,
      amt: 10,
    },
    {
      name: "T",
      uv: 90,
      pv: 50,
      amt: 10,
    },
    {
      name: "W",
      uv: 85,
      pv: 50,
      amt: 10,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "24px" }}>
      <Box
        sx={{
          display: "flex",
          columnGap: "180px",
          alignItems: "center",
          pl: "32px",
        }}
      >
        <Typography sx={{ fontSize: "19px", fontWeight: "500" }}>
          Conversions
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">This Week</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="This Week"
          ></Select>
        </FormControl>
      </Box>
      <ResponsiveContainer
        width={588}
        height={343}
        style={{
          background: "white",
          borderRadius: "15px",
          position: "relative",
        }}
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#3A57E8" />
          <Bar dataKey="uv" stackId="a" fill="#85F4FA" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
export default Conversion;
