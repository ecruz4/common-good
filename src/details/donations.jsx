import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, IconButton, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
// import SendIcon from '@material-ui/icons/Send';
// import OfferTile from '../components/tiles/OfferTile';
// import RequestTile from '../components/tiles/RequestTile';
// import DonationInfo from './donationInfo';
// import UserInfo from './userInfo';
import ForumIcon from '@material-ui/icons/Forum';
import Map from './map';
import firestore from '../db/firebase';
// import timeago from 'timeago';

// PROPS PASSED FROM ROUTER
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     }
//   },
//   center: {
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   large: {
//     width: theme.spacing(15),
//     height: theme.spacing(15)
//   },
//   textFieldWidth: {
//     width: 800
//   },
//   button: {
//     marginTop: '20px',
//     width: '175px',
//     margin: 'auto'
//   }
// }));


const useStyles = makeStyles((theme) => ({
  root: {
    width: 1500,
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto'
  },
  image: {
    border: '2px solid black',
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    // width: 250,
    borderRadius: '20px',
    margin: 20
  },
  offerSpacing: {
    margin: 20
  },
  text: {

  },
  media: {
    height: 180,
  },
  content: {
    minHeight: 75
  },
  cardactions: {
    paddingLeft: 16,
    paddingTop: 0
  },
  card: {
    backgroundColor: '#ffff57'
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: "5px solid blue"
  },
  textFieldWidth: {
    width: 800
  },
  button: {
    marginTop: '20px',
    width: '175px',
    margin: 'auto'
  },
  avi: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  verticalSpacing: {
    marginTop: 20,
    marginBottom: 20
  }
}));

export default function Donations() {
  const location = useLocation();
  const {productId, userId, title, imgURL, description, quantity, date} = location.state;

  console.log(`prod ID: ${productId}, UserID: ${userId}, title: ${title}, imgURL: ${imgURL}, descrip: ${description}, qty: ${quantity}, date: ${date}`)
  const classes = useStyles();
  // const dummyProfPic = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  // const dummyDonorName = 'Bobby';
  // const dummyDonorDetails = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  const [donor, setDonor] = useState({});

  useEffect(() => {
    firestore.firestore.collection("users").where("uid", "==", userId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setDonor(doc.data());
      });
    })
    .catch((err) => console.log(err.message))
  }, []);

  // console.log('donor: ', donor);
  // let bio, city, email, name, phone, photo_url, state, uid, zipcode;
  // if (Object.keys(donor).length > 0) {
  //   let { bio, city, email, name, phone, photo_url, state, uid, zipcode } = donor;
  // }

  // const doc = {
  //   id: productId,
  //   donor_id: userId,
  //   imgURL: imgURL,
  //   title: title,
  //   description, description,
  //   quantity: quantity,
  //   date: date
  // }
  // const { id, donor_id, title, description, quantity, date } = doc;

  return (

    <Grid item xs={12} className={classes.root}>
      <Card className={classes.card}>
        <Grid container direction="row">
          <Grid item>
            {/* <div className={classes.image}> */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWg74rYh0ee1LQPLhyQxGFTxg4YBGMSUJQ&usqp=CAU" className={classes.image}></img>
            {/* </div> */}
          </Grid>
          {/* <Grid item xs={8}> */}
          <Grid item className={classes.offerSpacing}>
            <Typography variant="h3" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              date
            </Typography>
          </Grid>
          {/* </Grid> */}
        </Grid>
      {/* </Paper>
      <Paper elevation={2} className={classes.paper}> */}
        { donor.zipcode ?
        <Map
        zip={donor.zipcode}
        pic={donor.photo_url}
        />
        :
        null
        }
        { donor.bio ?
        <Grid container direction="row" className={classes.verticalSpacing}>
          <Grid item xs={3}>
            <div className={classes.avi}>
              <Avatar alt={donor.name} src={donor.photo_url} className={classes.avatar}/>
            </div>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h3" color="textSecondary">
              {donor.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {donor.bio}
            </Typography>
          </Grid>
      </Grid>
      :
      null
      }


      </Card>
    </Grid>





    // <>
    //   {/* <OfferTile doc={donationDoc}/> */}
    //   <DonationInfo doc={donationDoc}/>
    //   {/* <UserInfo doc={donationDoc}/> */}
    //   {/* <Map /> */}
    // </>
    // <>
    //   <Grid container>
    //     <Grid item xs={3}>
    //       <div className={classes.root}>
    //         <Avatar alt="profile pic" src={dummyProfPic} className={classes.large}/>
    //       </div>
    //     </Grid>
    //     <Grid item xs={9}>
    //       <Typography variant="h3">
    //         Details about {dummyDonorName}
    //       </Typography>
    //       <Typography variant="caption">
    //         {dummyDonorDetails}
    //       </Typography>
    //     </Grid>
    //   </Grid>
    //   <Grid item className={classes.center}>
    //     <Typography variant="h1">LEAVE A MESSAGE</Typography>
    //   </Grid>

    //     {/* <Desks/> Return to me! */}
    //   <Grid container direction="column">
    //     <Grid item className={classes.center}>
    //       <Typography variant="h6">Title</Typography>
    //     </Grid>
    //     <Grid item className={classes.center}>
    //       <TextField
    //         label="Title..."
    //         variant="outlined"
    //         className={classes.textFieldWidth}/>
    //     </Grid>
    //     <Grid item className={classes.center}>
    //       <Typography variant="h6">Message</Typography>
    //     </Grid>
    //     <Grid item className={classes.center}>
    //       <TextField
    //         label="Send a message..."
    //         variant="outlined"
    //         multiline
    //         rows={4}
    //         className={classes.textFieldWidth}/>
    //     </Grid>
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       className={classes.button}
    //       endIcon={<SendIcon />}
    //     >
    //       SEND MESSAGE
    //     </Button>
    //   </Grid>
    // </>
  )
}

