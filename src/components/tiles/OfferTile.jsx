import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  makeStyles,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
  Avatar,
  IconButton,
  CardActionArea,
  Typography,
  Grid,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

import firestore from '../../db/firebase';
import { convertMsToDays } from '../../utils/moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  image: {
    border: '1px solid red',
    margin: 20,
  },
  media: {
    height: 180,
  },
  avatar: {
    backgroundColor: '#ffed03',
  },
  content: {
    minHeight: 75,
  },
  cardactions: {
    padding: 16,
    justifyContent: 'space-between',
  },
  expiry: {
    color: '#2196f3',
  },
}));

const OfferTile = ({ doc }) => {
  const classes = useStyles();
  const { donor_id, title, description, quantity, date, expiry, id } = doc;

  const [donor, setDonor] = useState({});

  useEffect(() => {
    firestore.firestore
      .collection('users')
      .where('uid', '==', donor_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDonor(doc.data());
        });
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined" className={classes.root}>
        <CardActionArea disableTouchRipple>
          <CardHeader
            avatar={
              <Link
                key="profile"
                to={{
                  pathname: `/profile/${donor_id}`,
                  state: {
                    userId: donor_id,
                  },
                }}
              >
                <Avatar aria-label="offer" className={classes.avatar}>
                  <AccountCircleIcon />
                </Avatar>
              </Link>
            }
            action={
              <IconButton aria-label="chat">
                <ForumIcon />
              </IconButton>
            }
            title={
              <Link
                key="donationDetail"
                to={{
                  pathname: `/donations/${id}`,
                  state: {
                    productId: id,
                    userId: donor_id,
                    title: title,
                    description: description,
                    quantity: quantity,
                    date: date,
                  },
                }}
              >
                {`${title} (x${quantity})`}
              </Link>
            }
            subheader={donor.name}
          />
          <Link
            key="donationDetail"
            to={{
              pathname: `/donations/${id}`,
              state: {
                productId: id,
                userId: donor_id,
                title: title,
                description: description,
                quantity: quantity,
                date: date,
              },
            }}
          >
            <CardMedia
              className={classes.media}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWg74rYh0ee1LQPLhyQxGFTxg4YBGMSUJQ&usqp=CAU"
              title="Paella dish"
            />
          </Link>

          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardactions}>
            <Typography variant="overline">
              {`${donor.city}, ${donor.state}`}
            </Typography>
            <Typography className={classes.expiry} variant="overline">
              {`${convertMsToDays(expiry)} days left`}
            </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default OfferTile;
