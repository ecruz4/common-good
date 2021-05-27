import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grow,
} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import OfferModal from './OfferModal';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 10,
    marginBottom: 30,
  },
}));

function OfferButton() {
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
        <DialogTitle>Make a Donation</DialogTitle>
        <DialogContent>
          <OfferModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <Grow in {...{ timeout: 500 }}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          onClose={handleClose}
          size="small"
        >
          Make a Donation
        </Button>
      </Grow>
    </>
  );
}

export default OfferButton;
