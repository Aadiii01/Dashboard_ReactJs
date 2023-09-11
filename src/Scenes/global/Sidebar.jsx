import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Items= ({titles,to,icon,selected,setSelected}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <MenuItem active={selected === titles} style={{color: colors.grey[100]}} onClick={() => setSelected(titles)} icon={icon}>
            <Typography>{titles}</Typography>
            <Link to={to}/>
        </MenuItem>
    );
};

const Sidebar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [iscollapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("DashBoard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={iscollapsed}>
        <Menu iconShape="square">

          {/* Logo and Menu Icon*/}
          <MenuItem
            onClick={() => setCollapsed(!iscollapsed)}
            icon={iscollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!iscollapsed && (
              <Box display="flex" justifyContent="space-between" alignContent="center" ml="15px">
                <Typography variant="h3" color={colors.grey[100]} pt="5px">ADMIN</Typography>
                <IconButton onClick={() => setCollapsed(!iscollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!iscollapsed && (
            <Box mb="25px">
                <Box display="flex" justifyContent="center" alignContent="center">
                    <img alt="profile-user" width="100px" height="100px" src="img1.jpg" style={{cursor:"pointer",borderRadius:"50%"}}/>
                </Box>
                <Box textAlign="center">
                    <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m:"10px 0 0 0"}}>Aditya Arya</Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]} fontWeight="bold" >React JS Developer</Typography>
                </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={iscollapsed ? undefined : "10%"}>
            <Items titles="DashBord" to="/" icon={<HomeOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Data
            </Typography>
            <Items titles="Manage Team" to="/team" icon={<PeopleOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Items titles="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Items titles="Invoices Balances" to="/invoices" icon={<ReceiptOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Pages
            </Typography>
            <Items titles="Profile Form" to="/form" icon={<PersonOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Items titles="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Items titles="FAQ Page" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Charts
            </Typography>
            <Items titles="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Items titles="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Items titles="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected}/>
            <Items titles="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected}/>
          </Box>

        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
