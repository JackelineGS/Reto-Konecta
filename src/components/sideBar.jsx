import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DescriptionIcon from "@mui/icons-material/Description";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BarChartIcon from "@mui/icons-material/BarChart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 240;

export function InitialsIcon({ initials, color }) {
  const iconStyle = {
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color || "#919EAB66",
    borderRadius: "50%",
    color: "white",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  return <div style={iconStyle}>{initials}</div>;
}

export function SideBar({ userName, userRole }) {
  const [auth, setAuth] = React.useState(true);
  const userInitials = "JD"; // Cambia esto por las iniciales del usuario logeado

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position='static'
        sx={{
          height: "60px",
          backgroundColor: "white",
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: 0,
            padding: 0,
          }}
        >
          {auth && (
            <div>
              <InitialsIcon initials={userInitials} />
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            margin: 0,
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Box
          display='flex'
          alignItems='center'
          sx={{
            backgroundColor: "#919EAB14",
            padding: "16px",
            borderRadius: "8px",
            width: "210px",
            height: "80px",
            alignSelf: "center",
          }}
        >
          <Avatar
            alt='User Image'
            src='https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4'
            sx={{ width: 40, height: 40 }}
          />
          <Box ml={2}>
            <Typography
              variant='h5'
              component='div'
              color='#181818'
              fontSize='14px'
              fontWeight='bold'
            >
              {userName}Ana Fernández
            </Typography>
            <Typography variant='body2' color='textSecondary' color='#545454'>
              {userRole}Admin
            </Typography>
          </Box>
        </Box>
        <List>
          {["Convocatorias", "Postulantes", "Procesos"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#CE0F69",
                    borderRadius: "8px",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#6F7271",
                  }}
                >
                  {text === "Convocatorias" ? (
                    <DescriptionIcon />
                  ) : text === "Postulantes" ? (
                    <PermIdentityIcon />
                  ) : text === "Procesos" ? (
                    <BarChartIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: "#6F7271",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
