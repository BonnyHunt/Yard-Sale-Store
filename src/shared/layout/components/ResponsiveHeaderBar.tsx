import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, ListItem, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MoreIcon from '@mui/icons-material/MoreVert';


export const headerRoutes = [
  {
    name: 'All',
    path: '/all'
  },
  {
    name: 'Clothes',
    path: '/clothes'
  },
  {
    name: 'Electronics',
    path: '/electronics'
  },
  {
    name: 'Furnitures',
    path: '/furnitures'
  },
  {
    name: 'Toys',
    path: '/toys'
  },
  {
    name: 'Others',
    path: '/others'
  },
]
  ;

export const ResponsiveHeaderBar = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      sx={{
        top: '48px',
      }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to={'/profile'}
          style={{
            color: "black",
            textDecoration: "none"
          }}>
          Profile
        </Link>
      </MenuItem>

      <MenuItem>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      sx={{
        top: '48px',
      }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ><MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link to={'/profile'}
          style={{
            display: "flex",
            color: "black",
            textDecoration: "none",
          }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </Link>
      </MenuItem>
    </Menu>
  );

  const headerNavBar = (
    <div>
      <List
        sx={{ display: 'flex' }}>
        {headerRoutes.map((route) => (
          <Link
            to={route.path}
            style={{
              color: "white",
              textDecoration: "none"
            }}>
            <ListItem key={route.name}>
              <ListItemText primary={route.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          direction: "row",
          display: "flex",
          justifyContent: "center"
        }}
      ><Grid
        item
        lg={12}
        md={12}
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
          <Box sx={{
            position: 'relative',
            paddingRight: { xs: '15px', sm: '0px' }
          }}>
          </Box>
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            height: '60px',
            marginLeft: '120px',
          }}>
            {headerNavBar}
          </Box>
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            top: '10px',
            right: '10px',
            marginRight: '20px'
          }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="success">
                <LocalGroceryStoreIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              top: { xs: '5px', sm: '10px' },
              right: '20px',
              maxWidth: '30px'
            }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1 }} />
      {renderMobileMenu}
      {renderMenu}
    </Box >
  );
}
