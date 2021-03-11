import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
function NavBar() {
  return (
    <>
      <CssBaseline />
      <AppBar color="secondary">
        <Toolbar>
          <Typography variant="h6">Covid19-Tracker</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
