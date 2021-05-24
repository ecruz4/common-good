import React from 'react';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import {makeStyles, Card, CardHeader, CardContent, Avatar, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  avatar: {
    backgroundColor: '#33bfff',
  },
}));

const CharityTile = ({ doc }) => {
  const classes = useStyles();
  const {name, bio, focus, city, state} = doc;

  return (
    <>
      <Card variant="outlined" className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="charity profile" className={classes.avatar}>
              <LocationCityIcon />
            </Avatar>
          }
          title={name}
          subheader={focus}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {bio}
          </Typography>
          <br/>
          <Typography variant="overline">
            {`${city}, ${state}`}
          </Typography>
        </CardContent>
      </Card>
    </>
  );

}


export default CharityTile;