import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import StatusMenu from "./DropdownStatus";
import { Toolbar } from "@mui/material";
import Navlinks from "./Navlinks";
import { Typography } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { display } from "@mui/system";
export default function AddEventContainer() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Box sx={{ bgcolor: "#f0eded", height: "100vh", width: "auto" }}>
        <div>
          <Box
            id="body-card"
            sx={{
              display: "flex",
              bgcolor: "#f0eded",
              height: "100vh",
              width: "100%",
              marginBottom: "3%",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Toolbar>
                <div style={{ marginLeft: "84%" }}>
                  <h4>Status</h4>
                </div>
                <div style={{ marginTop: "2%" }}>
                  {" "}
                  <StatusMenu />
                </div>
              </Toolbar>
              <div
                className="nav-text"
                style={{
                  backgroundColor: "white",
                  marginLeft: "13%",
                  height: "8%",
                  marginTop: "5%",
                  display: "flex",
                }}
              >
                <Navlinks />
              </div>
              <Box sx={{ flexGrow: 1 }}>
                <Toolbar sx={{ marginLeft: "16%", marginTop: "3%" }}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "block" },
                      fontWeight: "bold",
                    }}
                  >
                    Event Date
                  </Typography>
                </Toolbar>
                <Toolbar sx={{marginLeft: "16%"}}>
                  <FormGroup sx={{display: 'inline-block'}}>
                    <FormControlLabel
                      control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 28,  backgroundColor: 'white', border:  "0.2px solid #e3e3e3"  }, color: 'white', '&.Mui-checked': {
                        color: 'red',
                      }}}/>}
                      label="Single Day Event"
                    />
                     <FormControlLabel
                      control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 28,  backgroundColor: 'white', border:  "0.2px solid #e3e3e3"  }, color: 'white', '&.Mui-checked': {
                        color: 'red',
                      }}}/>}
                      label="Multi Day Event"
                    />
                  </FormGroup>
                </Toolbar>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </React.Fragment>
  );
}
