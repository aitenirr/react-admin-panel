import { Box, Button, Typography } from "@mui/material";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function ProductinfoCard() {
  return (
    <Box
      sx={{
        pt: "24px",
        pl: "24px",
        pr: "24px",
        pb: "24px",
        backgroundColor: "white",
        borderBottomLeftRadius: "20px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <ShoppingBagTwoToneIcon sx={{ color: "#0048B2" }} />
          <Box sx={{ display: "flex", flexDirection: "column", pl: "16px" }}>
            <Typography>1153</Typography>
            <Typography sx={{ color: "#8A92A6" }}>Products</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <ShoppingBasketIcon sx={{ color: "#409900" }} />
          <Box sx={{ display: "flex", flexDirection: "column", pl: "16px" }}>
            <Typography>81K</Typography>
            <Typography sx={{ color: "#8A92A6" }}>Order Served</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{ pt: "24px", display: "flex", justifyContent: "space-between" }}
      >
        <Typography sx={{ fontSize: "28px", fontWeight: "500" }}>
          $4,050,12,300
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              borderRadius: "35px",
              backgroundColor: "#1AA053",
              color: "white",
              pt: "4px",
              pr: "16px",
              pl: "16px",
              pb: "4px",
            }}
          >
            YoY 24%
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#08B1BA",
          pt: "9px",
        }}
      >
        Life time sales
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", pt: "24px" }}
      >
        <Button
          sx={{
            backgroundColor: "#3A57E8",
            bordeRadius: "4px",
            pt: "8px",
            pb: "8px",
            pr: "24px",
            pl: "24px",
            color: "white",
            fontSize: "14px",
            fontWeight: "300",
          }}
        >
          View Project
        </Button>
        <Button
          sx={{
            backgroundColor: "#08B1BA",
            bordeRadius: "4px",
            pt: "8px",
            pb: "8px",
            pr: "24px",
            pl: "24px",
            color: "white",
            fontSize: "14px",
            fontWeight: "300",
          }}
        >
          Analytics
        </Button>
      </Box>
    </Box>
  );
}
export default ProductinfoCard;
