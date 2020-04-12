import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { signIn }        from './auth';
import AuthRoute         from './AuthRoute';
import { Home, LoginForm, Catalog, NotFound, About } from './layout/Layout';
import LogoutButton      from './LogoutButton';

import AppBar            from '@material-ui/core/AppBar';
import Toolbar           from '@material-ui/core/Toolbar';
import IconButton        from '@material-ui/core/IconButton';
import Typography        from '@material-ui/core/Typography';
import { fade, makeStyles, withStyles }  from '@material-ui/core/styles';
// import { withStyles }    from '@material-ui/core/styles';
import Button            from '@material-ui/core/Button';

import InputBase         from '@material-ui/core/InputBase';
import Badge             from '@material-ui/core/Badge';
import MenuItem          from '@material-ui/core/MenuItem';
import Menu              from '@material-ui/core/Menu';
import MenuIcon          from '@material-ui/icons/Menu';

import SearchIcon        from '@material-ui/icons/Search';
import AccountCircle     from '@material-ui/icons/AccountCircle';
import MailIcon          from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon          from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
}));

const StyledButton = withStyles({
    root: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
    //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);


export default function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;

    const login = ({ email, password }) => setUser(signIn({ email, password }));
    const logout = () => setUser(null);

    const classes = useStyles();

    ///////////////// MENU
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleCatalogMenuOpen = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Catalog</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleCatalogMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Catalog</p>
        </MenuItem>
      </Menu>
    );
    ///////////////// MENU       

    return (
        <Router>
            <div className={classes.grow}>          
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title} noWrap>
                        품목관리
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>                       
                        <div className={classes.grow} />                    
                        <Link to="/"><StyledButton>Home</StyledButton></Link>
                        <Link to="/about"><StyledButton>About</StyledButton></Link>
                        <Link to="/catalog"><StyledButton>Catalog</StyledButton></Link>
                        {authenticated ? (
                            <LogoutButton logout={logout} />
                        ) : (
                            <Link to="/login"><StyledButton>Login</StyledButton></Link>
                        )}                           
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}                
            </div>           
            <hr />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route
                        path="/login"
                        render={props => (
                            <LoginForm authenticated={authenticated} login={login} {...props} />
                        )}
                    />
                    <AuthRoute
                        authenticated={authenticated}
                        path="/catalog"
                        render={props => <Catalog user={user} {...props} />}
                    />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router>
    );
}
