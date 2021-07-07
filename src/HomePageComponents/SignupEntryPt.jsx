import React, { Fragment, useState, useContext, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Paper, Popper, MenuList } from "@material-ui/core";

import UserContext from "../contexts/UserContext";
import SignupButton from "../components/modals/SignupButton";
import OrgSignupButton from "../components/modals/OrgSignupButton";

const useStyles = makeStyles((theme) => ({
  MuiTypography: {
    fontSize: 16,
  },
  menulist: {
    maxWidth: 100,
    position: "relative",
    left: 11,
    top: 5,
    zIndex: 2,
  },
  popper: {
    position: "absolute",
    zIndex: 2,
  },
}));

const SignupEntryPt = () => {
  const classes = useStyles();
  const { userInfo } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      {userInfo !== null ? (
        <Typography
          color="primary"
          className={classes.MuiTypography}
        >{`Hello ${userInfo.name}!`}</Typography>
      ) : (
        <>
          <Button
            style={{ color: "#0069c0" }}
            ref={anchorRef}
            color="secondary"
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Sign Up
          </Button>
          <Popper
            className={classes.popper}
            open={open}
            anchorEl={anchorRef.current}
          >
            <Paper className={classes.menulist}>
              <MenuList autoFocusItem={open} id="menu-list-grow">
                <SignupButton closeMenu={handleToggle}> Donor</SignupButton>
                <OrgSignupButton closeMenu={handleToggle}>
                  Charity
                </OrgSignupButton>
              </MenuList>
            </Paper>
          </Popper>
        </>
      )}
    </>
  );
};

export default SignupEntryPt;
