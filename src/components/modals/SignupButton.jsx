import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from '../../contexts/UserContext';
import SignupModal from './SignupModal';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#ffffff',
  },
  title: {
    textAlign: 'center',
  },
}));

function SignupButton({ closeMenu }) {
  const classes = useStyles();
  const { userInfo } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeMenu();
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle
          className={classes.title}
          style={{ background: '#ffed03', color: '#2196f3' }}
        >
          Join as a Donor
        </DialogTitle>
        <DialogContent style={{ background: '#ffed03' }}>
          <SignupModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <Button
        fullWidth
        className={classes.button}
        disableElevation
        variant="contained"
        onClick={handleClickOpen}
        // onClose={handleClose}
      >
        Donor
      </Button>
    </>
  );
}

export default SignupButton;
