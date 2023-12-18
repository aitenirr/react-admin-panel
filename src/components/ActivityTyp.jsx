import { Box, Typography } from "@mui/material";

function ActivityTyp(props) {
  return (
    <Box>
      <Typography>{props.title}</Typography>
      <Typography>{props.data}</Typography>
    </Box>
  );
}
export default ActivityTyp;
