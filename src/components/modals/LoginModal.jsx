/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import db from "../../db/firebase";

const useStyles = makeStyles({
  ModalContainer: {
    display: "flex",
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

function LoginModal({ handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const handleSubmit = () => {
    db.auth
      .signInWithEmailAndPassword(email, password)
      .then((/* cred */) => {
        // const user = userCredential.user;
        handleClose();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Container className={classes.ModalContainer}>
      <TextField
        color="secondary"
        id="standard-full-width"
        label="Email"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        color="secondary"
        id="standard-full-width"
        label="Password"
        style={{ margin: 8 }}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      />
      <Container className={classes.buttonContainer} style={{ marginTop: 20 }}>
        <Button
          style={{ margin: 8, background: "#2196f3", color: "white" }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Button
          style={{ margin: 8, background: "#2196f3", color: "white" }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Container>
    </Container>
  );
}

export default LoginModal;
