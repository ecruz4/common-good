import React, {Fragment, useEffect, useState} from 'react';
import Homepage from './HomePageComponents/Homepage';
import { useAuthState } from 'react-firebase-hooks/auth';

import db from './db/firebase';
import UserContext from './contexts/UserContext';

import AllRequests from './components/AllRequests';
import AllOffers from './components/AllOffers';
import AllCharities from './components/AllCharities';
import Profile from './components/profile-page/Profile';



// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#ffff57',
//       main: '#ffed03',
//       dark: '#c7bb00',
//       contrastText: '#000000',
//     },
//     secondary: {
//       light: '#6ec6ff',
//       main: '#2196f3',
//       dark: '#0069c0',
//       contrastText: '#000000',
//     },
//   },
// });


function App() {

  return (
    <>
    <Homepage />

    </>
  )
}
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */


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
//   const [userInfo, setUserInfo] = useState({});

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
//         <LogoutButton />

//         {/* <br/>
//         <div>-----REQUEST TILES------</div>
//         <br/>
//         <AllRequests />
//         <br/>
//         <div>-----DONATION TILES------</div>
//         <br/>
//         <AllOffers />
//         <br/>
//         <div>-----CHARITY ORGS TILES------</div>
//         <br/>
//         <AllCharities /> */}

//       </UserContext.Provider>
//     </div>
//   );
// }


export default App;
