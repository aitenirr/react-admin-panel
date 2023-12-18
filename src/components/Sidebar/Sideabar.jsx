import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Box,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RadioIcon from "@mui/icons-material/Radio";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckIcon from "@mui/icons-material/Check";
import GroupIcon from "@mui/icons-material/Group";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import WalletIcon from "@mui/icons-material/Wallet";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "257px",

        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: "257px",

          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ px: "10px" }}>
        <List sx={{ mt: "38px" }} subheader="Home">
          <ListItemButton
            onClick={() => {
              setSelectedItem(0);
            }}
            selected={selectedItem === 0}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(1);
            }}
            selected={selectedItem === 1}
          >
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>
            <ListItemText primary="Menu Style" />
            {selectedItem === 1 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
        </List>
        <Divider />

        <List sx={{ mt: "38px" }} subheader="Pages">
          <ListItemButton
            onClick={() => {
              setSelectedItem(6);
            }}
            selected={selectedItem === 6}
          >
            <ListItemIcon>
              <RadioIcon />
            </ListItemIcon>
            <ListItemText primary="Example" />
            {selectedItem === 6 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(7);
            }}
            selected={selectedItem === 7}
          >
            <ListItemIcon>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Widgets" />
            {selectedItem === 7 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(8);
            }}
            selected={selectedItem === 8}
          >
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Maps" />
            {selectedItem === 8 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(9);
            }}
            selected={selectedItem === 9}
          >
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Authentication" />
            {selectedItem === 9 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(10);
            }}
            selected={selectedItem === 10}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
            {selectedItem === 10 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(11);
            }}
            selected={selectedItem === 11}
          >
            <ListItemIcon>
              <ErrorIcon />
            </ListItemIcon>
            <ListItemText primary="Error 404" />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(12);
            }}
            selected={selectedItem === 12}
          >
            <ListItemIcon>
              <WarningIcon />
            </ListItemIcon>
            <ListItemText primary="Error 505" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(13);
            }}
            selected={selectedItem === 13}
          >
            <ListItemIcon>
              <BookmarkIcon />
            </ListItemIcon>
            <ListItemText primary=" Maitence" />
          </ListItemButton>
        </List>

        <Divider />

        <List sx={{ mt: "38px" }} subheader="Components">
          <ListItemButton
            onClick={() => {
              setSelectedItem(14);
            }}
            selected={selectedItem === 14}
          >
            <ListItemIcon>
              <WalletIcon />
            </ListItemIcon>
            <ListItemText primary="Form" />
            {selectedItem === 14 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(15);
            }}
            selected={selectedItem === 15}
          >
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Table" />
            {selectedItem === 15 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setSelectedItem(4);
            }}
            selected={selectedItem === 4}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Icons" />
            {selectedItem === 4 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              setSelectedItem(5);
            }}
            selected={selectedItem === 5}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Form" />
            {selectedItem === 5 ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
export default Sidebar;
