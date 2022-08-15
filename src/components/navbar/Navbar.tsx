import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Badge,
} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './navbar.scss';
import { useState } from 'react';

const pages = ['Home', 'Products', 'Contact'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { pathname } = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BestShop
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="mobile-menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box sx={{ p: 1, textAlign: 'center' }}>
                <NavLink
                  to="cart"
                  className={({ isActive }) =>
                    isActive ? 'nav-link-mobile' : 'nav-link-mobile'
                  }
                  onClick={handleCloseNavMenu}
                >
                  <Badge badgeContent={0} color="primary" showZero>
                    <ShoppingCartIcon sx={{ fontSize: '2rem' }} />
                  </Badge>
                </NavLink>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <NavLink
                      key={page}
                      onClick={handleCloseNavMenu}
                      to={`${page === 'Home' ? '/' : page}`}
                      className={({ isActive }) =>
                        isActive
                          ? 'nav-link-mobile active-mobile'
                          : 'nav-link-mobile'
                      }
                    >
                      {page}
                    </NavLink>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>
          {/* Desktop */}
          <Container
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              m: 0,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              BestShop
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                maxWidth: '21rem',
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page}
                  onClick={handleCloseNavMenu}
                  to={`${page === 'Home' ? '/' : page}`}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {page}
                </NavLink>
              ))}
            </Box>
            <Box>
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {pathname === '/cart' ? (
                  <Badge badgeContent={0} color="primary" showZero>
                    <ShoppingCartIcon sx={{ fontSize: '2rem' }} />
                  </Badge>
                ) : (
                  <Badge badgeContent={0} color="secondary" showZero>
                    <ShoppingCartIcon sx={{ fontSize: '2rem' }} />
                  </Badge>
                )}
              </NavLink>
            </Box>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
