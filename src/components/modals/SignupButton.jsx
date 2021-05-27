import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from '../../contexts/UserContext';
import SignupModal from './SignupModal';

const useStyles = makeStyles((theme) => ({
  MuiTypography: {
      fontSize: 16,
      // color: 'primary',
      // fontWeight: 'bold',
      // fontFamily: 'roboto',

  },

}));

function SignupButton() {
  const classes = useStyles();
  const { userInfo } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    userInfo !== null ? (<Typography color="primary" className={classes.MuiTypography}>{`Hello ${userInfo.name}!`}</Typography>) : (
    <>
      <Dialog open={open}>
        <DialogTitle style={{ background: '#ffed03', color: '#2196f3'}}>Create an Account</DialogTitle>
        <DialogContent style={{ background: '#ffed03' }}>
          <SignupModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <Button
        color='secondary'
        onClick={handleClickOpen}
        onClose={handleClose}
      >
        Sign Up
      </Button>
    </>
    )
  );
}

export default SignupButton;
