/* eslint-disable import/no-extraneous-dependencies */
import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import fire from '../../db/firebase';

import LoginModal from './LoginModal';

function LoginButton() {
  const [user] = useAuthState(fire.auth);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <LoginModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        onClose={handleClose}
      >
        Login
      </Button>
    </>
  );
}

export default LoginButton;
