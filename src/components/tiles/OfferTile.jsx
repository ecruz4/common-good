import React, { useState, useEffect } from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {makeStyles, Card, CardMedia, CardHeader, CardActions, CardContent, Avatar, IconButton, CardActionArea, Typography, Grid} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

import firestore from '../../db/firebase';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  image: {
    border: '1px solid red',
    margin: 20
  },
  media: {
    height: 180,
  },
  avatar: {
    backgroundColor: '#33bfff',
  },
  content: {
    minHeight: 75
  },
  cardactions: {
    paddingLeft: 16,
    paddingTop: 0
  }
}));


const OfferTile = ({ doc }) => {

  const classes = useStyles();
  const { donor_id, title, description, quantity, date } = doc;

  const [donor, setDonor] = useState({});

  useEffect(() => {
    firestore.firestore.collection("users").where("uid", "==", donor_id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setDonor(doc.data());
      });
    })
    .catch((err) => console.log(err.message))
  }, []);


  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined" className={classes.root}>
        <CardActionArea disableTouchRipple>

          <CardHeader
            avatar={
              <Avatar aria-label="offer" className={classes.avatar}>
                <AccountCircleIcon />
              </Avatar>
            }
            action={
              <IconButton aria-label="chat">
                <ForumIcon/>
              </IconButton>
            }
            title={`${title} (x${quantity})`}
            subheader={donor.name}
          />

          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWg74rYh0ee1LQPLhyQxGFTxg4YBGMSUJQ&usqp=CAU"
            title="Paella dish"
          />
          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardactions}>
            <Typography variant="overline">
              {`${donor.city}, ${donor.state}`}
            </Typography>
          </CardActions>

        </CardActionArea>
      </Card>

    </Grid>
  );

}


export default OfferTile;