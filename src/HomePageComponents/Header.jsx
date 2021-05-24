import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import db from '../db/firebase';
import UserContext from '../contexts/UserContext';
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

  return (
    <>
    <UserContext.Provider value={{ user, userInfo }}>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small">Sign up</Button> */}
        <SignupButton />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {/* <Button variant="outlined" size="small">
          Log in
        </Button> */}
        <LoginButton />
        <LogoutButton />
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
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