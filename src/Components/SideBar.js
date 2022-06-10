import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ImageList, ImageListItem, Image } from '@mui/material';
import logo from '../logo123.svg';
import { Download } from '@mui/icons-material';
import { fontFamily } from '@mui/system';
import '../App.css';

const drawerWidth = 200;

export default function PermanentDrawerLeft() {
  return (
    <Box id='side-bar'>
      <CssBaseline />
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            overflowX: 'hidden',
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'red',
            color: 'white'
          },
        }}
        variant="permanent"
        anchor="left"
      >
       
        <Divider />
        <List>
        <ListItem sx={{marginLeft: "7%"}}>
        <img 
        src={logo}
        alt="logo"
        height="50%"
        width="70%"
        margin-top="8%"
        margin-left="8%"
        loading="lazy"
        align-content="center"
      /></ListItem>
      <div>
          { ['Tracks', 'Series', 'Events', 'Account', 'Users', 'Reports', 'Videos', 'Promos', "Message Ctr", "Track Types", "Series Types", "Credits", "Waivers", "Transaction", "Registration", "Fee Matrices"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon style={{ color: 'white' }}  /> : <MailIcon  style={{ color: 'white' }} />}
                </ListItemIcon>
                <ListItemText className='list-item' primary={text}/>
              </ListItemButton>
            </ListItem>
          ))}
          </div>
        </List>
      </Drawer>
    </Box>
  );
}
