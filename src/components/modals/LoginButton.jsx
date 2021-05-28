/* eslint-disable import/no-extraneous-dependencies */
import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import fire from '../../db/firebase';

import UserContext from '../../contexts/UserContext';

import LoginModal from './LoginModal';

function LoginButton() {
  const [user] = useAuthState(fire.auth);
  const { userInfo } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    !user && (
      <>
        <Dialog open={open}>
          <DialogTitle
            style={{
              background: '#ffed03',
              color: '#2196f3',
              textAlign: 'center',
            }}
          >
            Login
          </DialogTitle>
          <DialogContent style={{ background: '#ffed03' }}>
            <LoginModal handleClose={handleClose} />
          </DialogContent>
        </Dialog>
        <Button
          style={{ color: '#0069c0' }}
          onClick={handleClickOpen}
          onClose={handleClose}
        >
          Login
        </Button>
      </>
    )
  );
}

export default LoginButton;
