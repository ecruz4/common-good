/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import Avatar from '@material-ui/core/Avatar';

function ProfileAvatar({data}) {
  // const { user } = useContext(UserContext);

  return (
    <div>
      <p>Profile Avatar</p>
      <Avatar alt={data.name} src="https://www.junkhappens.com/wp-content/uploads/2018/09/junk-removal-Brooklyn-Park-MN.jpg" />
    </div>
  )
}

export default ProfileAvatar
