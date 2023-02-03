import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Link href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{ width: "fit-content" }}
            >
              Home
            </Typography>
          </Link>
          <div style={{ marginLeft: "20px" }}></div>
          <Link href="/predict">
            <Typography
              variant="h6"
              component="div"
              sx={{ width: "fit-content" }}
            >
              Predict
            </Typography>
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
