import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sideabar";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
function MainLayout(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ mt: "74px", display: "flex" }}>
        <Sidebar />
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
          <main>{props.children}</main>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
export default MainLayout;
