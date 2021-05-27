import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  CardActionArea,
  Typography,
  Grid,
  Grow,
} from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ForumIcon from '@material-ui/icons/Forum';
import UserContext from '../../contexts/UserContext';
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
    minHeight: 75,
  },
  cardactions: {
    paddingLeft: 16,
    paddingTop: 0,
  },
}));

const RequestTile = ({ doc }) => {
  const classes = useStyles();
  const { userInfo } = useContext(UserContext);
  const { id, org_id, title, description, quantity, emergency, date } = doc;

  const [org, setOrg] = useState({});

  useEffect(() => {
    firestore.firestore
      .collection('organizations')
      .where('uid', '==', org_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setOrg(doc.data());
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
                emergency ? (
                  <Link
                    key="charity"
                    to={{
                      pathname: `/charities/${org_id}`,
                      state: {
                        userId: org_id,
                        type: 'charity',
                      },
                    }}
                  >
                    <Avatar aria-label="request" className={classes.avatar}>
                      <LocationCityIcon />
                    </Avatar>
                  </Link>
                ) : (
                  <Link
                    key="charity"
                    to={{
                      pathname: `/charities/${org_id}`,
                      state: {
                        userId: org_id,
                        type: 'charity',
                      },
                    }}
                  >
                    <Avatar aria-label="request" className={classes.avatarEmg}>
                      <NotificationImportantIcon />
                    </Avatar>
                  </Link>
                )
              }
              action={
                <Link
                  key="chat"
                  to={{
                    pathname: `/chat/${org_id}`,
                    state: {
                      userId: org_id,
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
              title={title}
              subheader={org.name}
            />

            <Link
              style={{ textDecoration: 'none' }}
              key={`donationDetail-${id}`}
              to={{
                pathname: `/donations/${id}`,
                state: {
                  context: 'organizations',
                  productId: id,
                  userId: org_id,
                  title,
                  description,
                  quantity,
                  date,
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
                {`${org.city}, ${org.state}`}
              </Typography>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grow>
    </Grid>
  );
};

export default RequestTile;
