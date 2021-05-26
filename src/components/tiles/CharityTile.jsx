import React from 'react';
import { Link } from 'react-router-dom';

import LocationCityIcon from '@material-ui/icons/LocationCity';
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  CardActionArea,
  Typography,
  Grid,
  Grow,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  avatar: {
    backgroundColor: '#ffed03',
  },
  content: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 16,
    },
  },
}));

const CharityTile = ({ doc }) => {
  const classes = useStyles();
  const { uid, name, bio, focus, city, state } = doc;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Grow in {...{ timeout: 500 }}>
        <Card variant="outlined" className={classes.root}>
          <CardActionArea disableTouchRipple>
            <CardHeader
              avatar={
                <Link
                  key="charity"
                  to={{
                    pathname: `/charities/${uid}`,
                    state: {
                      userId: uid,
                      name: name,
                      bio: bio,
                      focus: focus,
                      city: city,
                      state: state,
                    },
                  }}
                >
                  <Avatar
                    aria-label="charity profile"
                    className={classes.avatar}
                  >
                    <LocationCityIcon />
                  </Avatar>
                </Link>
              }
              title={name}
              subheader={focus}
            />

            <CardContent className={classes.content}>
              <Typography variant="body2" color="textSecondary" component="p">
                {bio}
              </Typography>
              <br />
              <Typography variant="overline">{`${city}, ${state}`}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grow>
    </Grid>
  );
};

export default CharityTile;
