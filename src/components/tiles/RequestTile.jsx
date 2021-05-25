import React, { useState, useEffect } from 'react';

import {makeStyles, Card, CardHeader, CardContent, CardActions, Avatar, IconButton, CardActionArea, Typography, Grid} from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ForumIcon from '@material-ui/icons/Forum';

import firestore from '../../db/firebase';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  avatar: {
    backgroundColor: '#ffed03',
  },
  avatarEmg: {
    backgroundColor: '#FF0000',
  },
  content: {
    minHeight: 75
  },
  cardactions: {
    paddingLeft: 16,
    paddingTop: 0
  }
}));


const RequestTile = ({ doc }) => {

  const classes = useStyles();
  const { org_id, title, description, quantity, emergency, date } = doc;

  const [org, setOrg] = useState({});

  useEffect(() => {
    firestore.firestore.collection("organizations").where("uid", "==", org_id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setOrg(doc.data());
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
              emergency ?
                <Avatar aria-label="request" className={classes.avatar}>
                  <LocationCityIcon />
                </Avatar> :
                <Avatar aria-label="request" className={classes.avatarEmg}><NotificationImportantIcon/></Avatar>
            }
            action={
              <IconButton aria-label="chat">
                <ForumIcon/>
              </IconButton>
            }
            title={`${title} (x${quantity})`}
            subheader={org.name}
          />

          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardactions}>
            <Typography variant="overline">
              {`${org.city}, ${org.state}`}
            </Typography>
          </CardActions>

        </CardActionArea>
      </Card>
    </Grid>
  );

}


export default RequestTile;
