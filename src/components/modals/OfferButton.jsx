import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';

import OfferModal from './OfferModal';

function OfferButton() {
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        onClose={handleClose}
      >
        Make a Donation
      </Button>
    </>
  );
}

export default OfferButton;
