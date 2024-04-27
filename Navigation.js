import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const navbarBackgroundColor = '#6a77a8';
const drawerWidth = 240; 

const Navbar = styled(AppBar)({
  background: navbarBackgroundColor,
  position: 'fixed',
  top: 0,
  width: '100%',
});

const MenuButton = styled(IconButton)({
  marginLeft: '825px', 
});

const DrawerContainer = styled('div')({
  width: `${drawerWidth}px`,
  backgroundColor: '#f8f5e6', 
  height: '100%',
});

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <Navbar>
        <Toolbar>
          <MenuButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            ☰
          </MenuButton>
          <Typography variant="h6" component={Link} to="/">
            Home
          </Typography>
          <Typography variant="h6" component={Link} to="/login">
            Login
          </Typography>
          <Typography variant="h6" component={Link} to="/signup">
            Signup
          </Typography>
          <Typography variant="h6" component={Link} to="/BusList">
            Explore
          </Typography>
        </Toolbar>
      </Navbar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={closeDrawer}
        sx={{ width: drawerWidth }}
      >
        <DrawerContainer
          sx={{
            width: drawerWidth,
            backgroundColor: '#f8f5e6', 
          }}
        >
          <List>
            <ListItem component={Link} to="/" onClick={closeDrawer}>
              Home
            </ListItem>
            <ListItem button component={Link} to="/login" onClick={closeDrawer}>
              Login
            </ListItem>
            <ListItem button component={Link} to="/signup" onClick={closeDrawer}>
              Signup
            </ListItem>
            <ListItem button component={Link} to="/BusList" onClick={closeDrawer}>
              Explore
            </ListItem>
          </List>
        </DrawerContainer>
      </Drawer>
    </div>
  );
};

export default Navigation;
