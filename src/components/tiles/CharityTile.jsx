import React from 'react';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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