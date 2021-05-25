/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import ProfileInfo from './ProfileInfo';
import { Grid, Typography } from '@material-ui/core';
import background from '../../assets/profileBackground.jpg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 4,
    fontFamily: [
      'Pattaya',
      'sans-serif',
    ].join(',')
  }
})

function ProfileHeader({data, edit}) {
  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch">
      <Grid item container direction="row" style={{backgroundImage: `url(${background})`, height: "222px"}} >
        <Grid style={{position: "relative", top: "60px", left: "50px"}}>
          <ProfileAvatar data={data} edit={edit} />
        </Grid>
      </Grid>
      <Grid container direction="row" item alignItems="center" style={{backgroundColor: "#7DA1FD", height: "118px"}}>
        <Grid item xs={2} />
        <ThemeProvider theme={theme} > 
          <Typography>{data.name}</Typography>
        </ThemeProvider>
        <ProfileInfo data={data} />
      </Grid>
    </Grid>
  )
}

export default ProfileHeader
