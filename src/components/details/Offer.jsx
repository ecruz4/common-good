import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, IconButton, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import Map from './Map';
import firestore from '../../db/firebase';
import timeAgo from '../../utils/timeAgo';

// PROPS PASSED FROM ROUTER
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

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
    borderRadius: '20px',
    margin: 20
  },
  offerSpacing: {
    margin: 20
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
  avi: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  verticalSpacing: {
    marginTop: 20,
    marginBottom: 20
  },
  date: {
    display: 'flex',
    alignItems: 'flex-end'
  }
}));

export default function Offer({ doc }) {
  const classes = useStyles();

  const { productId, userId, title, imgURL, description, quantity, date } = doc;

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

  const formattedDate = timeAgo.format(new Date(date.seconds * 1000));

  return (
    <Grid item xs={12} className={classes.root}>
      <Card>
        <Grid container direction="row">
          <Grid item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWg74rYh0ee1LQPLhyQxGFTxg4YBGMSUJQ&usqp=CAU" className={classes.image}></img>
          </Grid>
          <Grid item className={classes.offerSpacing}>
            <Typography variant="h3" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
            <Grid container direction="row" className={classes.date}>
              <Typography variant="body2" color="textSecondary" className={classes.date}>
                {formattedDate} |
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {`Quantity: ${quantity}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
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
  )
}