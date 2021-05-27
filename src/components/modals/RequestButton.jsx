import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Grow,
} from '@material-ui/core';
import React, { useState } from 'react';

import RequestModal from './RequestModal';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 10,
    marginBottom: 30,
  },
}));

function RequestButton() {
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
        <DialogTitle>Make a Request</DialogTitle>
        <DialogContent>
          <RequestModal handleClose={handleClose} />
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
          Make a Request
        </Button>
      </Grow>
    </>
  );
}

export default RequestButton;
