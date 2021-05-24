import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

function ProfileAvatar() {
  const { user } = useContext(UserContext);

  // console.log(user.email);
  // console.log(user);
  // console.log(user.uid);

  return (
    <div>
      <h1>Profile Avatar</h1>
    </div>
  )
}

export default ProfileAvatar
