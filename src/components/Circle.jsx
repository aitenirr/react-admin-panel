import {
  Box,
  Typography,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
function Circle() {
  return (
    <Box
      sx={{
        display: "flex",
        mt: "120px",
        pl: "32px",
        pb: "32px",
        pr: "32px",
        background: "white",
        width: "420px",
        height: "300px",
        borderRadius: "20px",
      }}
    >
      <Box sx={{ width: "440px", height: "350px", pr: "70px" }}>
        <Box
          sx={{
            display: "flex",
            columnGap: "180px",
            py: "32px",
            px: "32px",
            alignItems: "center",
            pl: "32px",
          }}
        >
          <Typography sx={{ fontSize: "19px", fontWeight: "500" }}>
            Earnings
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

        <Box sx={{ display: "flex" }}>
          <Box sx={{ pl: "40px" }}>
            <CircularProgress variant="determinate" value={75} size={170} />
            {/* <CircularProgress variant="determinate" value={60} size={140} /> */}
          </Box>
          <Box sx={{ pl: "80px" }}>
            <Box sx={{ display: "flex", pb: "50px" }}>
              <CircleIcon sx={{ color: "#3A57E8", pr: "25px" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#8A92A6",
                  }}
                >
                  Fashion
                </Typography>
                <Typography>251K</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <CircleIcon sx={{ color: "#85F4FA", pr: "25px" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#8A92A6",
                  }}
                >
                  Accessories
                </Typography>
                <Typography>176K</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Circle;
