import { Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';

import OrgSignupModal from './OrgSignupModal';

function OrgSignupButton() {
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
        <DialogTitle style={{ background: '#ffed03', color: '#2196f3'}}>Create a Charity Account</DialogTitle>
        <DialogContent style={{ background: '#ffed03' }}>
          <OrgSignupModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <Button
        color='secondary'
        onClick={handleClickOpen}
        onClose={handleClose}
      >
        Create a Charity Account
      </Button>
    </>
  );
}

export default OrgSignupButton;
