import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Divider } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StickyHeadTable from "./DataTable";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

export default function SimpleContainer() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contacts');
  };
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/new');
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const Add = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const AddIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <React.Fragment>
      <CssBaseline />

      <Box sx={{ bgcolor: "white", height: "100vh", width: 'auto' }}>
        <div>
          <Box
           id= "body-card"
            sx={{
              display: "flex",
              bgcolor: "white",
              height: "100vh",
              width: "75%",
              border: "0.2px solid #e3e3e3",
              marginLeft: "20%",
              marginTop: "3%",
              marginBottom: "3%",
            }}
          >
            <Box sx={{ flexGrow: 1}}>
              <Toolbar>
                <Typography 
                id="typo-event"
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: "system-ui",
                    },
                  }}
                >
                  Events
                </Typography>
                <Search>
                  <SearchIconWrapper
                  id="search-icon-w"
                    sx={{
                      backgroundColor: "#f7f7f7",
                      paddingRight: "5%",
                      borderRadius: "7%",
                    }}
                  >
                    <SearchIcon
                    id="search-icon"
                      sx={{ color: "black", backgroundColor: "#f7f7f7" }}
                    />
                  </SearchIconWrapper>
                  <InputBase
                  id="search-input"
                    sx={{
                      marginLeft: "22%",
                      backgroundColor: "#f7f7f7",
                      fontSize: "95%",
                      paddingTop: "4%",
                      paddingBottom: "4%",
                      paddingLeft: "2%",
                      width: "100%",
                      borderRadius: "3%",
                    }}
                    placeholder="Search Events"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Divider id='divider-v' orientation="vertical" flexItem sx={{marginLeft: "57%"}}/>
                <Add id='add-icon' sx={{position: "absolute", right: 70}}>
                  <AddIconWrapper>
                  <Link  to="/new"><AddIcon type='button' sx={{color: "red", fontSize: 50}} /></Link>
                  </AddIconWrapper>
                </Add>
              </Toolbar>
              <Divider/>
              <StickyHeadTable/>
            </Box>
          </Box>
        </div>
      </Box>
    </React.Fragment>
  );
}
