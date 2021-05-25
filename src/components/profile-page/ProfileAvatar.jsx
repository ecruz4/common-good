/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import profileImage from '../../assets/profileImage.jpg'
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import EditProfileModal from './EditProfileModal';

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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{border: "8px solid #ffff57", borderRadius: "100%"}}>
      <Dialog open={open}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <EditProfileModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      {edit === true ? 
      <StyledBadge color="primary" badgeContent={<EditIcon style={{color: "#6ec6ff", fontSize: '45px'}} onClick={handleClickOpen}
      onClose={handleClose} />} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
        <Avatar alt={data.name} src={profileImage} style={{border: "5px solid rgb(255, 0, 0, 0)", height: "250px", width: "250px"}} />
      </StyledBadge> : 
        <Avatar alt={data.name} src={profileImage} style={{border: "5px solid rgb(255, 0, 0, 0)", height: "250px", width: "250px"}} />
      }
      
    </div>
  )
}

export default ProfileAvatar










