import React from 'react';
import { Avatar, Grid, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  },
  textFieldWidth: {
    width: 800
  }
}));


export default function Donations() {
  const classes = useStyles();
  const dummyProfPic = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  const dummyDonorName = 'Bobby';
  const dummyDonorDetails = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';


  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <div className={classes.root}>
            <Avatar alt="profile pic" src={dummyProfPic} className={classes.large}/>
          </div>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h3">
            Details about {dummyDonorName}
          </Typography>
          <Typography variant="caption">
            {dummyDonorDetails}
          </Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.center}>
        <Typography variant="h1">LEAVE A MESSAGE</Typography>
      </Grid>

        {/* <Desks/> Return to me! */}
      <Grid container direction="column" className={classes.center}>
        <Grid item className={classes.center}>
          <Typography variant="h6">Title</Typography>
        </Grid>
        <Grid item className={classes.center}>
          <TextField
            label="Title..."
            variant="outlined"
            className={classes.textFieldWidth}/>
        </Grid>
        <Grid item className={classes.center}>
          <Typography variant="h6">Message</Typography>
        </Grid>
        <Grid item className={classes.center}>
          <TextField
            label="Send a message..."
            variant="outlined"
            multiline
            rows={4}
            className={classes.textFieldWidth}/>
        </Grid>
      </Grid>
    </>
  )
}

