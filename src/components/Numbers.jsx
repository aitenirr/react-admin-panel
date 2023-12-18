import { Box, Typography } from "@mui/material";

function Numbers() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        mt: "40px",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        pt: "24px",
        pr: "50px",
        pl: "50px",
        pb: "24px",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "28px", fontWeight: "500" }}>
          750K
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", color: "#8A92A6" }}
        >
          Website Visitors
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "28px", fontWeight: "500" }}>
          7,500
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", color: "#8A92A6" }}
        >
          New Customers
        </Typography>
      </Box>
    </Box>
  );
}
export default Numbers;
