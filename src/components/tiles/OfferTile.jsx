import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {makeStyles, Card, CardMedia, CardHeader, CardContent, Avatar, Typography} from '@material-ui/core';
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
}));

const OfferTile = ({ doc, isProfilePage }) => {

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
    <>
      {isProfilePage ?

        <Card variant="outlined" className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="offer" className={classes.avatar}>
                <AccountCircleIcon />
              </Avatar>
            }
            title={`${title} (x${quantity})`}
            subheader={donor.name}
          />
          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWg74rYh0ee1LQPLhyQxGFTxg4YBGMSUJQ&usqp=CAU"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
            <br/>
            <Typography variant="overline">
              {`${donor.city}, ${donor.state}`}
            </Typography>
          </CardContent>
        </Card>

        :

        <div>
          <AccountCircleIcon />
          <div>{title}</div>
          <div>{description}</div>
          <div>{`x ${quantity}`}</div>
          <div>{`${donor.city}, ${donor.state}`}</div>
        </div>

      }
    </>
  );

}


export default OfferTile;