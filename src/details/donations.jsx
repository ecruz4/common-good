import React, { useContext, useState } from 'react';
import { Avatar, Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import UserContext from '../contexts/UserContext';
const nodemailer = require('nodemailer');
const sendmail = require('sendmail')();


// To use context:
// In the file you want to access the value in,
// import React, { useContext } from 'react'; x
// import UserContext from '../../contexts/UserContext'; Or whatever the relative path is
// const { user } = useContext(UserContext);
// You can now use user like any other variable!

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
  },
  button: {
    marginTop: '20px',
    width: '175px',
    margin: 'auto'
  }
}));

export default function Donations() {
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [title, setTitle] = useState(null);
  console.log('user: ', user);
  const classes = useStyles();
  const dummyProfPic = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  const dummyDonorName = 'Bobby';
  const dummyDonorDetails = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  async function handleClick(e) {
    e.preventDefault();

    // sendmail({
    //   from: 'dylanreid7@gmail.com',
    //   to: 'dylanreid7@gmail.com',
    //   subject: 'subj',
    //   html: 'hello dude',
    // }, (err, reply) => {
    //   console.log(err && err.stack);
    //   console.dir(reply);
    // });

    sendmail({
      from: 'no-reply@yourdomain.com',
      to: 'test@qq.com, test@sohu.com, test@163.com, dylanreid7@gmail.com ',
      subject: 'test sendmail',
      html: 'Mail of test sendmail ',
    }, function(err, reply) {
      console.log(err && err.stack);
      console.dir(reply);
  });

    // let transporter = nodemailer.createTransport({
    //   port: 587,
    //   secure: false
    // })

    // var message = {
    //   from: user.email,
    //   to: 'dylanreid7@gmail.com',
    //   subject: 'whattup',
    //   text: 'hello dylan',
    // }

    // let info = await transporter.sendMail(message);

    // console.log('Message sent: ', info.messageId);

    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
  // handleClick(e).catch(console.error)

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
      <Grid container direction="column">
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
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={handleClick}
        >
          SEND MESSAGE
        </Button>
      </Grid>
    </>
  )
}

