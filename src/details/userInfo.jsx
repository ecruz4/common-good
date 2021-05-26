// import React from 'react';
// import { Avatar, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, IconButton, makeStyles, Paper, TextField, Typography } from '@material-ui/core';

// import ForumIcon from '@material-ui/icons/Forum';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     }
//   },
//   center: {
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   large: {
//     width: theme.spacing(15),
//     height: theme.spacing(15)
//   },
//   textFieldWidth: {
//     width: 800
//   },
//   button: {
//     marginTop: '20px',
//     width: '175px',
//     margin: 'auto'
//   }
// }));





// export default function UserInfo({ doc }) {
//   const classes = useStyles();
//   const { id, donor_id, title, imgURL, description, quantity, date } = doc;
//   const dummyProfPic = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
//   const dummyDonorName = 'Bobby';
//   const dummyDonorDetails = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

//   return (
//     <>
//       <Grid container>
//         <Grid item xs={3}>
//           <div className={classes.root}>
//             <Avatar alt="profile pic" src={dummyProfPic} className={classes.large}/>
//           </div>
//         </Grid>
//         <Grid item xs={9}>
//           <Typography variant="h3">
//             Details about {dummyDonorName}
//           </Typography>
//           <Typography variant="caption">
//             {dummyDonorDetails}
//           </Typography>
//         </Grid>
//       </Grid>
//     </>
//   )
// }

