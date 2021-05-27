import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
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
  Grow,
} from '@material-ui/core';
import firestore from '../../db/firebase';
import { convertMsToDays } from '../../utils/moment';
import UserContext from '../../contexts/UserContext';

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
  const { userInfo } = useContext(UserContext);
  const { donor_id, title, description, quantity, date, expiry, id, imgURL } =
    doc;

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
      <Grow in {...{ timeout: 500 }}>
        <Card variant="outlined" className={classes.root}>
          <CardActionArea disableTouchRipple>
            <CardHeader
              avatar={
                <Link
                  key="profile"
                  to={{
                    pathname: `/profile/${donor_id}`,
                    state: {
                      userId: donor.uid,
                      type: 'user',
                    },
                  }}
                >
                  <Avatar aria-label="offer" className={classes.avatar}>
                    <AccountCircleIcon />
                  </Avatar>
                </Link>
              }
              action={
                <Link
                  key="chat"
                  to={{
                    pathname: `/chat/${donor_id}`,
                    state: {
                      userId: donor_id,
                    },
                  }}
                >
                  {userInfo && userInfo.uid ? (
                    <IconButton aria-label="chat">
                      <ForumIcon />
                    </IconButton>
                  ) : (
                    <></>
                  )}
                </Link>
              }
              title={`${title} (x${quantity})`}
              subheader={donor.name}
            />
            <Link
              key={`donationDetail-${id}`}
              to={{
                pathname: `/donations/${id}`,
                state: {
                  productId: id,
                  userId: donor_id,
                  title,
                  imgURL,
                  description,
                  quantity,
                  date,
                  context: 'offer',
                },
              }}
            >
              <CardMedia
                className={classes.media}
                image={
                  imgURL || `https://source.unsplash.com/400x200/?${title}`
                }
                title="charitable donation"
              />
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              key="donationDetail"
              to={{
                pathname: `/donations/${id}`,
                state: {
                  context: 'users',
                  productId: id,
                  userId: donor_id,
                  title,
                  imgURL,
                  description,
                  quantity,
                  date,
                  context: 'offer',
                },
              }}
            >
              <CardContent className={classes.content}>
                <Typography variant="body2" color="textSecondary">
                  {description}
                </Typography>
              </CardContent>
            </Link>

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
      </Grow>
    </Grid>
  );
};

export default OfferTile;
