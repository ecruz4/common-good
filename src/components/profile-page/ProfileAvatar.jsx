/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';


function ProfileAvatar({data}) {

  return (
    <div>
      {/* Will need to add a conditional here. If UID of session matches UID of page, add the edit icon and make it click-able */}
      <Badge color="primary" badgeContent={<EditIcon />} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
        <Avatar alt={data.name} src={data.photo_url} style={{border: "5px solid #FFB341", height: "250px", width: "250px"}} />
      </Badge>
    </div>
  )
}

export default ProfileAvatar
