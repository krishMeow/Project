import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import ArchitectureIcon from "@mui/icons-material/AccountTree";
import BuildIcon from "@mui/icons-material/Build";

import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';

const links = [
  { label: "Dashboard", path: "/", icon: <HomeOutlinedIcon /> },
  { label: "Pricing Comparison", path: "/pricing-comparison", icon: <AttachMoneyIcon /> },
  { label: "Architecture Builder", path: "/architecture", icon: <ArchitectureIcon /> },
  { label: "DevOps Tools Comparison", path: "/devops-tools", icon: <BuildIcon /> },
  { label: "AI Recommendations", path: "/ai-recommendations", icon: <LightbulbOutlinedIcon /> },
  { label: "Latency Tracker", path: "/latency-tracker", icon: <LanguageOutlinedIcon /> },
  { label: "Shared Pipelines", path: "/shared-pipelines", icon: <ShareOutlinedIcon /> },
  { label: "Benchmarks", path: "/benchmarks", icon: <SignalCellularAltOutlinedIcon /> },
] as const;

export default function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      classes={{ paper: "drawer-width" }}
      PaperProps={{ className: "drawer-width" }}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      {/* Spacer to offset AppBar height */}
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          justifyItems: "center",
          gap: "13px",
        }}
      >
        <div>

        <CloudQueueIcon  className="text-[#5d9fd9]"/>
        </div>

        <Typography variant="h6" sx={{ fontWeight: "bold", color: "White" }}>
          CloudWise
        </Typography>
      </Toolbar>
      <List>
        {links.map((link) => {
          const selected = location.pathname === link.path;
          return (
            <ListItemButton
              key={link.path}
              component={Link}
              to={link.path}
              selected={selected}
              sx={{
                "&:hover": {
                  backgroundColor: "#333", // dark gray hover
                  color: "white", // cyan text on hover
                  "& .MuiListItemIcon-root": {
                    color: "white", // icon color on hover
                  },
                },
                "&.Mui-selected": {
                  backgroundColor: "#222", // selected background
                  color: "white",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}
