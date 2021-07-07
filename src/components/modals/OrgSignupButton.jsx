import { Button, Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import OrgSignupModal from "./OrgSignupModal";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#ffffff",
  },
  title: {
    textAlign: "center",
  },
}));

function OrgSignupButton({ closeMenu }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeMenu();
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle
          className={classes.title}
          style={{ background: "#ffed03", color: "#2196f3" }}
        >
          Join as an Organization
        </DialogTitle>
        <DialogContent style={{ background: "#ffed03" }}>
          <OrgSignupModal handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <Button
        fullWidth
        className={classes.button}
        disableElevation
        color="secondary"
        onClick={handleClickOpen}
        onClose={handleClose}
      >
        Charity
      </Button>
    </>
  );
}

export default OrgSignupButton;
