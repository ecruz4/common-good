import React, { useState, useEffect } from 'react';
import { Avatar, Badge, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, IconButton, makeStyles, Paper, TextField, Typography, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import Map from './Map';
import firestore from '../../db/firebase';
import timeAgo from '../../utils/timeAgo';

// PROPS PASSED FROM ROUTER
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    bottom: 50,
    right: 20,
    padding: '0 4px',
    height: 55,
    width: 55,
    borderRadius: 100,
    color: '#FFB341'
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
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
    padding: 20
  },
  card: {
    width: 1000
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: "5px solid rgb(255, 0, 0, 0)"
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
  center: {
    alignItems: 'center'
  },
  date: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 40
  },
  bottom: {
    alignItems: 'flex-end'
  },
  spacer: {
    marginTop: '200px'
  },
  chatButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 40
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  height1: {
    // height: '30%'
  },
  height2: {
    paddingTop: 20,
    paddingRight: 20
  },
  height3: {
    // height: '20%',
    // alignItems: 'center'
    position: 'absolute',
    bottom: 20
  },
  avatarSpacing: {
    paddingLeft: 30
  },
  profileSpacing: {
    paddingLeft: 40,
    paddingTop: 10
  },
  descSpacing: {
    paddingTop: 10
  },
  emergency: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  redText: {
    color: 'red',
    paddingLeft: 4
  },
  relative: {
    position: 'relative'
  }
}));

export default function Request({ doc }) {
  const classes = useStyles();

  console.log('doc: ', doc);

  const { productId, userId, title, emergency, description, quantity, date } = doc;

  const [org, setOrg] = useState({});

  useEffect(() => {
    firestore.firestore
      .collection('organizations')
      .where('uid', '==', userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setOrg(doc.data());
        });
      })
      .catch((err) => console.log(err.message));
  }, []);

  console.log('org: ', org);

  const formattedDate = timeAgo.format(new Date(date.seconds * 1000));

  return (
    <Grid item xs={12} className={classes.root}>
      <Card className={classes.card}>
        <Grid container direction="row">
          <Grid item xs={6}>
            {emergency ?
            <img src="https://images.unsplash.com/photo-1559199882-6959a71820bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1431&q=80" className={classes.image}></img>
            :
            <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" className={classes.image}></img>
            }
          </Grid>
          <Grid container item xs={6}>
            <Grid container direction="column" className={classes.relative}>
              {emergency ?
              <Grid container direction="row" className={classes.height1}>
                <Grid item xs={6} className={classes.title}>
                  <Typography variant="h3">
                    {title}
                  </Typography>
                </Grid>
                <Grid item xs={5} className={classes.emergency}>
                  <InfoIcon color="error" variant="filled"/>
                  <Typography className={classes.redText}>Urgent Request</Typography>
                </Grid>
                <Grid item xs={1} className={classes.chatButton}>
                  <Link
                    key="chat"
                    to={{
                      pathname: `/chat/${org.uid}`,
                      state: {
                        userId: org.uid,
                      },
                    }}
                  >
                    <IconButton aria-label="chat">
                      <ForumIcon />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
              :
              <Grid container direction="row" className={classes.height1}>
                <Grid item xs={4} className={classes.title}>
                  <Typography variant="h3">
                    {title}
                  </Typography>
                </Grid>
                <Grid item xs={8} className={classes.chatButton}>
                  <Link
                    key="chat"
                    to={{
                      pathname: `/chat/${org.uid}`,
                      state: {
                        userId: org.uid,
                      },
                    }}
                  >
                    <IconButton aria-label="chat">
                      <ForumIcon />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
              }
              <Grid item className={classes.height2}>
                <Typography variant="body1">Description:</Typography>
                <Typography variant="body2" color="textSecondary">
                  {description}
                </Typography>
              </Grid>
              <Grid container direction="row" className={classes.height3}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">
                    {`Quantity: ${quantity}`}
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.date}>
                  <Typography variant="body2" color="textSecondary">
                    {formattedDate}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        { org.zipcode ?
        <Map
        zip={org.zipcode}
        pic={org.photo_url}
        />
        :
        null
        }
        { org.bio ?
        <Grid container direction="row" className={classes.verticalSpacing}>
          <Link
            key="charity"
            to={{
              pathname: `/charities/${org.uid}`,
              state: {
                userId: org.uid,
                type: 'charity',
              },
            }}
          >
            <div style={{border: "8px solid #ffff57", borderRadius: "100%", marginLeft: '30px'}}>
              <StyledBadge color="primary">
                <Avatar alt={org.name} src={org.photo_url} style={{border: "5px solid rgb(255, 0, 0, 0)", height: "150px", width: "150px"}} />
              </StyledBadge>
            </div>
          </Link>
          <Grid item xs={8} className={classes.profileSpacing}>
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              key="charity"
              to={{
                pathname: `/charities/${org.uid}`,
                state: {
                  userId: org.uid,
                  type: 'charity',
                },
              }}
            >
              <Typography variant="h3">
                {org.name}
              </Typography>
            </Link>
            <Typography variant="body1" className={classes.descSpacing}>
              Bio:
            </Typography>
            <Typography variant="body2" color="textSecondary" className={classes.descSpacing}>
              {org.bio}
            </Typography>
          </Grid>
      </Grid>
      :
      null
      }
      </Card>
    </Grid>
  )
}
