import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Grow,
} from "@material-ui/core";
import React, { useState } from "react";

import RequestModal from "./RequestModal";

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
        <DialogTitle style={{ background: "#ffed03", color: "#2196f3" }}>
          Make a Request
        </DialogTitle>
        <DialogContent style={{ background: "#ffed03" }}>
          <RequestModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <Grow in {...{ timeout: 500 }}>
        <Button
          className={classes.button}
          color="secondary"
          onClick={handleClickOpen}
          onClose={handleClose}
          // size="small"
        >
          Make a Request
        </Button>
      </Grow>
    </>
  );
}

export default RequestButton;
