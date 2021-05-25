/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import profileImage from '../../assets/profileImage.jpg'
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    bottom: 50,
    right: 20,
    padding: '0 4px',
    height: 55,
    width: 55,
    borderRadius: 100,
    color: '#FFB341'
  },
}))(Badge);

function ProfileAvatar({data, edit}) {

  return (
    <div style={{border: "8px solid #FFB341", borderRadius: "100%"}}>
      {/* Will need to add a conditional here. If UID of session matches UID of page, add the edit icon and make it click-able */}
      {edit === true ? 
      <StyledBadge color="primary" badgeContent={<EditIcon style={{color: "#7DA1FD", fontSize: '45px'}} />} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
        <Avatar alt={data.name} src={profileImage} style={{border: "5px solid rgb(255, 0, 0, 0)", height: "250px", width: "250px"}} />
      </StyledBadge> : 
        <Avatar alt={data.name} src={profileImage} style={{border: "5px solid rgb(255, 0, 0, 0)", height: "250px", width: "250px"}} />
      }
      
    </div>
  )
}

export default ProfileAvatar
