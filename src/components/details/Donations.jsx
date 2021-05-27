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

export default function Donations() {
  const location = useLocation();
  const { productId, userId, title, imgURL, description, quantity, date, context } = location.state;

  console.log('context', context);

  if (context === 'organizations') {
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

