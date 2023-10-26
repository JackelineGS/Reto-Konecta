import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

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
    marginBottom: "10px",
  };

  return <div style={iconStyle}>{initials}</div>;
}

export function AppBarAdmin() {
  const [auth, setAuth] = React.useState(true);
  const userInitials = "JD"; // tenemos que cambiar esto por las del logeo del admin!!!

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ height: "60px", backgroundColor: "white" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {auth && (
            <div>
              <InitialsIcon initials={userInitials} />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
