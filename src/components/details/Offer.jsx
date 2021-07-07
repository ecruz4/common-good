import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import Map from "./Map";
import firestore from "../../db/firebase";
import timeAgo from "../../utils/timeAgo";

// PROPS PASSED FROM ROUTER
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    bottom: 50,
    right: 20,
    padding: "0 4px",
    height: 55,
    width: 55,
    borderRadius: 100,
    color: "#FFB341",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  image: {
    border: "2px solid black",
    height: 250,
    maxWidth: 450,
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    margin: 20,
  },
  offerSpacing: {
    padding: 20,
  },
  card: {
    width: 1000,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: "5px solid rgb(255, 0, 0, 0)",
  },
  avi: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  verticalSpacing: {
    marginTop: 20,
    marginBottom: 20,
  },
  center: {
    alignItems: "center",
  },
  date: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 40,
  },
  bottom: {
    alignItems: "flex-end",
  },
  spacer: {
    marginTop: "200px",
  },
  chatButton: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 40,
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  height1: {
    paddingTop: 20,
  },
  height2: {
    paddingTop: 20,
    paddingRight: 20,
  },
  height3: {
    position: "absolute",
    bottom: 20,
  },
  avatarSpacing: {
    paddingLeft: 30,
  },
  profileSpacing: {
    paddingLeft: 40,
    paddingTop: 10,
  },
  descSpacing: {
    paddingTop: 10,
  },
  relative: {
    position: "relative",
  },
}));

export default function Offer({ doc }) {
  const classes = useStyles();
  const { productId, userId, title, description, quantity, date } = doc;
  const formattedDate = timeAgo.format(new Date(date.seconds * 1000));
  let imgURL = doc.imgURL || `https://source.unsplash.com/400x200/?${title}`;
  const [donor, setDonor] = useState({});

  useEffect(() => {
    firestore.firestore
      .collection("users")
      .where("uid", "==", userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDonor(doc.data());
        });
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Grid item xs={12} className={classes.root}>
      <Card className={classes.card}>
        <Grid container direction="row">
          <Grid item xs={6}>
            {imgURL ? (
              <img src={imgURL} className={classes.image}></img>
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWg74rYh0ee1LQPLhyQxGFTxg4YBGMSUJQ&usqp=CAU"
                className={classes.image}
              ></img>
            )}
          </Grid>
          <Grid container item xs={6}>
            <Grid container direction="column" className={classes.relative}>
              <Grid container direction="row" className={classes.height1}>
                <Grid item xs={6} className={classes.title}>
                  <Typography variant="h3">{title}</Typography>
                </Grid>
                <Grid item xs={6} className={classes.chatButton}>
                  <Link
                    key="chat"
                    to={{
                      pathname: `/chat/${donor.uid}`,
                      state: {
                        userId: donor.uid,
                      },
                    }}
                  >
                    <IconButton aria-label="chat">
                      <ForumIcon />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
              <Grid item className={classes.height2}>
                <Typography variant="body1">Description:</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.descSpacing}
                >
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
        {donor.zipcode ? (
          <Map zip={donor.zipcode} pic={donor.photo_url} />
        ) : null}
        {donor.bio ? (
          <Grid container direction="row" className={classes.verticalSpacing}>
            <Link
              key="profile"
              to={{
                pathname: `/profile/${donor.uid}`,
                state: {
                  userId: donor.uid,
                  type: "user",
                },
              }}
            >
              <div
                style={{
                  border: "8px solid #ffff57",
                  borderRadius: "100%",
                  marginLeft: "30px",
                }}
              >
                <StyledBadge color="primary">
                  <Avatar
                    alt={donor.name}
                    src={donor.photo_url}
                    style={{
                      border: "5px solid rgb(255, 0, 0, 0)",
                      height: "150px",
                      width: "150px",
                    }}
                  />
                </StyledBadge>
              </div>
            </Link>
            <Grid item xs={8} className={classes.profileSpacing}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                key="profile"
                to={{
                  pathname: `/profile/${donor.uid}`,
                  state: {
                    userId: donor.uid,
                    type: "user",
                  },
                }}
              >
                <Typography variant="h3">{donor.name}</Typography>
              </Link>
              <Typography variant="body1" className={classes.descSpacing}>
                Bio:
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.descSpacing}
              >
                {donor.bio}
              </Typography>
            </Grid>
          </Grid>
        ) : null}
      </Card>
    </Grid>
  );
}
