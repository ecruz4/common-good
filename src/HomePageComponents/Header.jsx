import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Material UI
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Database
import db from '../db/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import UserContext from '../contexts/UserContext';

// Login Components
import LoginButton from '../components/modals/LoginButton';
import LogoutButton from '../components/modals/LogoutButton';
import SignupButton from '../components/modals/SignupButton';



const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const [user] = useAuthState(db.auth);
  const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
    if (user === null) {
      return;
    }
    db.firestore
      .collection('users')
      .where('uid', '==', user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserInfo(doc.data());
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, [user]);

  const navStyle = {
    color: 'black',
    textDecoration: 'none',
  };

  return (
    <>
    <UserContext.Provider value={{ user, userInfo }}>

      <Toolbar className={classes.toolbar}>
        <SignupButton />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link
            key="homepage"
            to="/"
            style={navStyle}
          >
            {title}
          </Link>

        </Typography>
        <LoginButton />
        <LogoutButton />
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>

          <Link
            key="profile"
            to="/profile"
            style={navStyle}
          >
            Profile
          </Link>
          <Link
            key="donations"
            to="/donations"
            style={navStyle}
          >
            Donations
          </Link>
          <Link
            key="charities"
            to="/charities"
            style={navStyle}
          >
            Charities
          </Link>

      </Toolbar>

      </UserContext.Provider>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};


/* eslint-disable import/no-extraneous-dependencies */
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';

// import db from './db/firebase';
// import UserContext from './contexts/UserContext';
// import LoginButton from './components/modals/LoginButton';
// import LogoutButton from './components/modals/LogoutButton';
// import SignupButton from './components/modals/SignupButton';

// To use context:
// In the file you want to access the value in,
// import React, { useContext } from 'react';
// import UserContext from '../../contexts/UserContext'; Or whatever the relative path is
// const { user } = useContext(UserContext);
// You can now use user like any other variable!

// function App() {
// user stores authentication data, like email and uid
//   const [user] = useAuthState(db.auth);
// userInfo will store a lot more, like email, and uid, but also bio, pic, etc...
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     if (user === null) {
//       return;
//     }
//     db.firestore
//       .collection('users')
//       .where('uid', '==', user.uid)
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           setUserInfo(doc.data());
//         });
//       })
//       .catch((error) => {
//         console.log('Error getting documents: ', error);
//       });
//   }, [user]);

//   return (
//     <div className="App">
//       <UserContext.Provider value={{ user, userInfo }}>
//         <SignupButton />
//         <LoginButton />
//         <LogoutButton />
//       </UserContext.Provider>
//     </div>
//   );
// }