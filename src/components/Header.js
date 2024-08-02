import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

import logo from "./../logo.webp";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0079C0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          component="img"
          sx={{
            height: 45,
          }}
          alt="Logo"
          src={logo}
        />

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
