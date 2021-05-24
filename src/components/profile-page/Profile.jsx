/* eslint-disable no-console */
import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import ProfileAbout from './ProfileAbout';
import ProfileAvatar from './ProfileAvatar';
import ProfileFeed from './ProfileFeed';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';

// To use context:
// In the file you want to access the value in,
// import React, { useContext } from 'react';
// import UserContext from '../../contexts/UserContext'; Or whatever the relative path is
// const { user } = useContext(UserContext);
// You can now use user like any other variable!

function Profile() {
  const { user } = useContext(UserContext);

  // console.log(user.email);
  // console.log(user);
  // console.log(user.uid);
  

  return (
    <div>
      <ProfileHeader />
      <ProfileInfo />
      <ProfileAvatar />
      <ProfileAbout />
      <ProfileFeed />
    </div>
  )
}

export default Profile
