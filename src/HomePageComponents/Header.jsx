/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment, useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material UI
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MailIcon from '@material-ui/icons/Mail';
import { Badge, Container } from '@material-ui/core';

// Login Components
import LoginButton from '../components/modals/LoginButton';
import LogoutButton from '../components/modals/LogoutButton';
import SignupButton from '../components/modals/SignupButton';
import OrgSignupButton from '../components/modals/OrgSignupButton';
import UserContext from '../contexts/UserContext';

import SignupEntryPt from './SignupEntryPt';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 150,
    zIndex: 1
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderBottom: `0.5px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    borderBottom: `2px solid white`,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  signup: {
    position: 'absolute',
    zIndex: 2,
  },
  appbar: {
    zIndex: 1,
  },
  navtexts: {
    fontSize: '0.9em',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;
  const { userInfo, newMessagesCount } = useContext(UserContext);

  const navStyle = {
    color: 'black',
    textDecoration: 'none',
  };

  const logoStyle = {
    color: 'white',
    textDecoration: 'none',
    // fontFamily: "'Abril Fatface', cursive"
    fontFamily: "'Pattaya', sans-serif",
    fontSize: '45px',
  };

  return (
    <Container>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          style={{ boxShadow: 'none', background: '#6ec6ff' }}
          className={classes.appbar}
        >
          <Toolbar className={classes.toolbar}>
            <SignupEntryPt className={classes.signup} />
            <Typography
              className={classes.navtexts}
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              style={{ justifyContent: 'center' }}
            >
              <Link key="homepage" to="/" style={logoStyle}>
                {title}
              </Link>
            </Typography>
            <LoginButton />
            <LogoutButton />
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            className={classes.toolbarSecondary}
          >
            <div>
              {userInfo && (
                <Link
                  key="profile"
                  to={{
                    pathname: `/profile/${userInfo.uid}`,
                    state: {
                      userId: userInfo.uid,
                      type: 'user',
                    },
                  }}
                  style={navStyle}
                >
                  <Typography className={classes.navtexts} variant="overline">
                    Profile
                  </Typography>
                </Link>
              )}
            </div>

            <Link key="donations" to="/donations" style={navStyle}>
              <Typography className={classes.navtexts} variant="overline">
                Listings
              </Typography>
            </Link>
            <Link key="charities" to="/charities" style={navStyle}>
              <Typography className={classes.navtexts} variant="overline">
                Charities
              </Typography>
            </Link>
            <div>
              {userInfo && (
                <Link
                  key="chat"
                  to={{
                    pathname: `/chat/${userInfo.uid}`,
                    state: {
                      userId: userInfo.uid,
                    },
                  }}
                  style={navStyle}
                >
                  <Badge badgeContent={newMessagesCount} color="primary">
                    <MailIcon />
                  </Badge>
                </Link>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
