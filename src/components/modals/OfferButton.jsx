import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grow,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import OfferModal from "./OfferModal";

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
        <DialogTitle style={{ background: "#ffed03", color: "#2196f3" }}>
          Make a Donation
        </DialogTitle>
        <DialogContent style={{ background: "#ffed03" }}>
          <OfferModal handleClose={handleClose} />
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
          Make a Donation
        </Button>
      </Grow>
    </>
  );
}

export default OfferButton;
