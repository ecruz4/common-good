import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, IconButton, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import Map from './Map';
import firestore from '../../db/firebase';
import timeAgo from '../../utils/timeAgo';
import Offer from './Offer';
import Request from './Request';

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
  },
  date: {
    display: 'flex',
    alignItems: 'flex-end'
  }
}));

export default function Donations() {
  const location = useLocation();
  const { productId, userId, title, imgURL, description, quantity, date, context } = location.state;

  const classes = useStyles();

  if (context === 'request') {
    const requestDoc = {
      productId,
      userId,
      title,
      description,
      quantity,
      date
    }
    return <Request doc={requestDoc}/>;
  } else if (context === 'offer') {
    const offerDoc = {
      productId,
      userId,
      title,
      imgURL,
      description,
      quantity,
      date
    }
    return <Offer doc={offerDoc}/>;
  } else {
    return null;
  }


}

