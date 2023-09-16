import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function AppBar_() {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
          }}
        >
          Single Page App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppBar_;
