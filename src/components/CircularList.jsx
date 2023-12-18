import CircularCard from "../components/CircularCard/CircularCard";
import { Box } from "@mui/material";

function CircularList() {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "40px",
        mt: "-60px",
        justifyContent: "center",
      }}
    >
      <CircularCard
        title="Total Sales"
        price="$560K"
        des="determinate"
        value="90"
        color="blue"
      />
      <CircularCard
        title="Total Profit"
        price="$185K"
        des="determinate"
        value={65}
        color="#08B1BA"
      />
      <CircularCard
        title="Total Cost"
        price="$375K"
        des="determinate"
        value={55}
      />

      <CircularCard
        title="Revenue"
        price="$742K"
        des="determinate"
        value={50}
        color="#08B1BA"
      />
      <CircularCard
        title="Net Income"
        price="$150K"
        des="determinate"
        value={45}
      />
      <CircularCard
        title="Today"
        price="$4600"
        des="determinate"
        value={30}
        color="#08B1BA"
      />
    </Box>
  );
}
export default CircularList;
