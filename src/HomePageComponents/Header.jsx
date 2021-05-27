/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material UI
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Login Components
import LoginButton from '../components/modals/LoginButton';
import LogoutButton from '../components/modals/LogoutButton';
import SignupButton from '../components/modals/SignupButton';
import UserContext from '../contexts/UserContext';

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
  const { title } = props;
  const { userInfo } = useContext(UserContext);

  const navStyle = {
    color: 'black',
    textDecoration: 'none',
  };

  const logoStyle = {
    color: 'white',
    textDecoration: 'none',
    // fontFamily: "'Abril Fatface', cursive"
    fontFamily: "'Pattaya', sans-serif",
    fontSize: "45px",
  };

  return (
    <>
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
                  type: "user"
                }
              }}
              style={navStyle}
            >
              Profile
            </Link>
          )}
        </div>

        <Link key="donations" to="/donations" style={navStyle}>
          Requests & Donations
        </Link>
        <Link key="charities" to="/charities" style={navStyle}>
          Charities
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
              Chat
            </Link>
          )}
        </div>
      </Toolbar>
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
