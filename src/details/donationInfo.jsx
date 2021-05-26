// import React, { useState, useEffect } from 'react';
// import { Avatar, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Grid, IconButton, makeStyles, Paper, TextField, Typography } from '@material-ui/core';

// import ForumIcon from '@material-ui/icons/Forum';
// import Map from './map';
// import firestore from '../db/firebase';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 1500,
//     display: 'flex',
//     justifyContent: 'center',
//     margin: 'auto'
//   },
//   image: {
//     border: '2px solid black',
//     height: 250,
//     display: 'flex',
//     justifyContent: 'center',
//     // width: 250,
//     borderRadius: '20px',
//     margin: 20
//   },
//   offerSpacing: {
//     margin: 20
//   },
//   text: {

//   },
//   media: {
//     height: 180,
//   },
//   content: {
//     minHeight: 75
//   },
//   cardactions: {
//     paddingLeft: 16,
//     paddingTop: 0
//   },
//   card: {
//     backgroundColor: '#ffff57'
//   },
//   center: {
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   avatar: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//     border: "5px solid blue"
//   },
//   textFieldWidth: {
//     width: 800
//   },
//   button: {
//     marginTop: '20px',
//     width: '175px',
//     margin: 'auto'
//   },
//   avi: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     }
//   },
//   verticalSpacing: {
//     marginTop: 20,
//     marginBottom: 20
//   }
// }));

// export default function DonationInfo({ doc }) {
//   const classes = useStyles();
//   const { id, donor_id, title, imgURL, description, quantity, date } = doc;
//   const dummyProfPic = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
//   const dummyDonorName = 'Bobby';
//   const dummyDonorDetails = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

//   const [donor, setDonor] = useState({});

//   useEffect(() => {
//     firestore.firestore.collection("users").where("uid", "==", donor_id)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         setDonor(doc.data());
//       });
//     })
//     .catch((err) => console.log(err.message))
//   }, []);

//   console.log('donor: ', donor);
//   let bio, city, email, name, phone, photo_url, state, uid, zipcode;
//   if (Object.keys(donor).length > 0) {
//     let { bio, city, email, name, phone, photo_url, state, uid, zipcode } = donor;
//   }

//   console.log('zip: ', zipcode);

//   return (
//     <Grid item xs={12} className={classes.root}>
//       <Card className={classes.card}>
//         <Grid container direction="row">
//           <Grid item>
//             {/* <div className={classes.image}> */}
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWg74rYh0ee1LQPLhyQxGFTxg4YBGMSUJQ&usqp=CAU" className={classes.image}></img>
//             {/* </div> */}
//           </Grid>
//           {/* <Grid item xs={8}> */}
//           <Grid item className={classes.offerSpacing}>
//             <Typography variant="h3" color="textSecondary">
//               {title}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               {description}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               date
//             </Typography>
//           </Grid>
//           {/* </Grid> */}
//         </Grid>
//       {/* </Paper>
//       <Paper elevation={2} className={classes.paper}> */}
//         { donor.zipcode ?
//         <Map zip={donor.zipcode}/>
//         :
//         null
//         }
//         { donor.bio ?
//         <Grid container direction="row" className={classes.verticalSpacing}>
//           <Grid item xs={3}>
//             <div className={classes.avi}>
//               <Avatar alt={donor.name} src={donor.photo_url} className={classes.avatar}/>
//             </div>
//           </Grid>
//           <Grid item xs={9}>
//             <Typography variant="h3" color="textSecondary">
//               {donor.name}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               {donor.bio}
//             </Typography>
//           </Grid>
//       </Grid>
//       :
//       null
//       }


//       </Card>
//     </Grid>
//   );

// };




{/* <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined" className={classes.root}>
        <CardActionArea disableTouchRipple>
          <CardContent className={classes.content}>
            <Typography variant="h3" color="textSecondary">
              {title}
            </Typography>
          </CardContent>

          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWg74rYh0ee1LQPLhyQxGFTxg4YBGMSUJQ&usqp=CAU"
            title="Paella dish"
          />

          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>

          <IconButton aria-label="chat">
            <ForumIcon/>
          </IconButton>

          <CardActions className={classes.cardactions}>
            <Typography variant="overline">
              {/* {`${donor.city}, ${donor.state}`} */}
    //         </Typography>
    //       </CardActions>

    //     </CardActionArea>
    //   </Card>

    // </Grid> */}



{/* <Grid item xs={12} sm={6} md={4} lg={3}>
<Card variant="outlined" className={classes.root}>
  <CardActionArea disableTouchRipple>

    <CardHeader
      avatar={
        <Link
        key="profile"
        to={{
          pathname: `/profile/${donor_id}`,
          state: {
            userId: donor_id
          }
        }}
      >
        <Avatar aria-label="offer" className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        </Link>
      }
      action={
        <Link
        key="chat"
        to={{
          pathname: `/chat/${donor_id}`,
          state: {
            userId: donor_id
          }
        }}
      >
        <IconButton aria-label="chat">
          <ForumIcon/>
        </IconButton>
        </Link>
      }
      title={
        <Link
        key="donationDetail"
        to={{
          pathname: `/donations/${id}`,
          state: {
            productId: id,
            userId: donor_id,
            title: title,
            description: description,
            quantity: quantity,
            date: date
          }
        }}
      >

        {`${title} (x${quantity})`}
        </Link>
      }
      subheader={donor.name}
    />
      <Link
        key="donationDetail"
        to={{
          pathname: `/donations/${id}`,
          state: {
            productId: id,
            userId: donor_id,
            title: title,
            description: description,
            quantity: quantity,
            date: date
          }
        }}
      >
        <CardMedia
      className={classes.media}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHWg74rYh0ee1LQPLhyQxGFTxg4YBGMSUJQ&usqp=CAU"
      title="Paella dish"
    />
        </Link>

    <CardContent className={classes.content}>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>

    <CardActions className={classes.cardactions}>
      <Typography variant="overline">
        {`${donor.city}, ${donor.state}`}
      </Typography>
    </CardActions>

  </CardActionArea>
</Card>

</Grid> */}