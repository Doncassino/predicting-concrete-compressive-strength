import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
	SvgIcon,
	IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ConcreteStrength from './img/ConcreteStrength.svg';

const NavBarElem = ({
  title,
  classes,
  handleDrawerOpen,
  open
}) => {
	// const classes = useStyles();
	
  const {
    REACT_APP_LOGO,
    REACT_APP_COMPANY
  } = process.env;
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={ConcreteStrength}
          style={{ height: '3em', marginRight: '1em' }}
        />
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );

}

export default NavBarElem;