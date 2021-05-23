import React from 'react';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import {makeStyles, Card, CardHeader, CardContent, Avatar, Typography} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
  },
  avatar: {
    backgroundColor: 'skyblue',
  },
}));

const CharityTile = ({ doc }) => {
  const classes = useStyles();
  const {name, bio, theme, city, state} = doc;

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
          subheader={theme}
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