import React from 'react';
import { Link } from 'react-router-dom';

import LocationCityIcon from '@material-ui/icons/LocationCity';
import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Avatar,
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
    minHeight: 200,
  },
}));

const CharityTile = ({ doc }) => {
  const classes = useStyles();
  const { uid, name, bio, focus, city, state, photo_url } = doc;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grow in {...{ timeout: 500 }}>
        <Card raised className={classes.root}>
          <CardActionArea disableTouchRipple>
            <CardHeader
              avatar={
                <Link
                  key="charity"
                  to={{
                    pathname: `/charities/${uid}`,
                    state: {
                      userId: uid,
                      type: 'charity',
                    },
                  }}
                >
                  {doc && doc.photo_url ? (
                    <Avatar
                      src={doc.photo_url}
                      aria-label="charity profile"
                      className={classes.avatar}
                    />
                  ) : (
                    <Avatar
                      aria-label="charity profile"
                      className={classes.avatar}
                    >
                      <LocationCityIcon />
                    </Avatar>
                  )}
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
