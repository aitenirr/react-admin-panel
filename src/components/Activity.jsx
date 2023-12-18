import { Box, Typography } from "@mui/material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function Activity() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        mt: "40px",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        pl: "24px",
        pt: "24px",
        pr: "24px",
        pb: "24px",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>
          Actvity overview
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", color: "#8A92A6" }}
        >
          <ArrowUpwardIcon sx={{ color: "#1AA053", fontSize: "20px" }} />
          16% this month
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ pt: "24px", fontSize: "19px", fontWeight: "400" }}>
          <PanoramaFishEyeIcon sx={{ color: "#3A57E8", pr: "16px" }} />
          $2400, Purchase
        </Typography>
        <Typography sx={{ pl: "42px", color: "#8A92A6" }}>
          11 JUL 8:10 PM
        </Typography>
        <Typography sx={{ pt: "32px", fontSize: "19px", fontWeight: "400" }}>
          <PanoramaFishEyeIcon sx={{ color: "#3A57E8", pr: "16px" }} />
          New order #8744152e
        </Typography>
        <Typography sx={{ pl: "42px", color: "#8A92A6" }}>
          11 JUL 11 PM
        </Typography>
        <Typography sx={{ pt: "32px", fontSize: "19px", fontWeight: "400" }}>
          <PanoramaFishEyeIcon sx={{ color: "#3A57E8", pr: "16px" }} />
          Affilate Payout
        </Typography>
        <Typography sx={{ pl: "42px", color: "#8A92A6" }}>
          11 JUL 7:64 PM
        </Typography>
        <Typography sx={{ pt: "32px", fontSize: "19px", fontWeight: "400" }}>
          <PanoramaFishEyeIcon sx={{ color: "#3A57E8", pr: "16px" }} />
          New user added
        </Typography>
        <Typography sx={{ pl: "42px", color: "#8A92A6" }}>
          11 JUL 1:21 AM
        </Typography>
        <Typography sx={{ pt: "32px", fontSize: "19px", fontWeight: "400" }}>
          <PanoramaFishEyeIcon sx={{ color: "#3A57E8", pr: "16px" }} />
          Product added
        </Typography>
        <Typography sx={{ pl: "42px", color: "#8A92A6" }}>
          11 JUL 4:50 AM
        </Typography>
      </Box>
    </Box>
  );
}
export default Activity;
