import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';

import SignupModal from './SignupModal';

function SignupButton() {
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
        <DialogTitle>Create an Account</DialogTitle>
        <DialogContent>
          <SignupModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        onClose={handleClose}
      >
        Sign Up
      </Button>
    </>
  );
}

export default SignupButton;
