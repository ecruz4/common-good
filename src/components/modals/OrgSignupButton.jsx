import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import OrgSignupModal from './OrgSignupModal';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#ffffff',
  },
}));

function OrgSignupButton() {
  const classes = useStyles();
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
        <DialogTitle>Create a Charity Account</DialogTitle>
        <DialogContent>
          <OrgSignupModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <Button
        fullWidth
        className={classes.button}
        disableElevation
        variant="contained"
        onClick={handleClickOpen}
        onClose={handleClose}
      >
        Charity
      </Button>
    </>
  );
}

export default OrgSignupButton;
