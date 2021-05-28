/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import EditProfileModal from './EditProfileModal';
import EditOrgModal from './EditOrgModal';

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
        <DialogTitle style={{ background: '#ffed03', color: '#2196f3'}}>Edit Profile</DialogTitle>
        <DialogContent style={{ background: '#ffed03', color: '#2196f3'}}>
          {data.type === "user" ? <EditProfileModal handleClose={handleClose} /> : <EditOrgModal handleClose={handleClose} />}
        </DialogContent>
      </Dialog>
      {edit === true ?
      <StyledBadge style={{ zIndex: '0'}} color="primary" badgeContent={<EditIcon style={{color: "#6ec6ff", fontSize: '45px'}} onClick={handleClickOpen}
      onClose={handleClose} />} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
        <Avatar alt={data.name} src={data.photo_url} style={{border: "5px solid rgb(255, 0, 0, 0)", height: "250px", width: "250px"}} />
      </StyledBadge> :
        <Avatar alt={data.name} src={data.photo_url} style={{border: "5px solid rgb(255, 0, 0, 0)", height: "250px", width: "250px"}} />
      }

    </div>
  )
}

export default ProfileAvatar

//