import { Box, Typography, TextField, Checkbox, Button } from "@mui/material";

function Authentication() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "436px", height: "602px", backgroundColor: "green" }}>
          <Typography
            sx={{ fontSize: "33px", fontWeight: 400, paddingBottom: "40px" }}
          >
            Hope Ui
          </Typography>
          <Box>
            <Typography>Sign In</Typography>
            <Typography>Sign in to stay connected.</Typography>
          </Box>
          <Box>
            <Typography>Email</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Typography>Password</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Box>
              <Box>
                <Checkbox disabled />
              </Box>
              <Typography> Remember me?</Typography>
              <Typography>Forgot Password</Typography>
            </Box>
            <Box>
              <Button variant="contained">Contained</Button>

              <Typography>or sign in with other accounts?</Typography>
              <Typography>
                Don’t have an account? Click here to sign up.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: "1 1 auto" }}>2</Box>
    </Box>
  );
}

export default Authentication;
