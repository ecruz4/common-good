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
    htmlFontSize: 6,
    fontFamily: [
      'Pattaya',
      'sans-serif',
    ].join(',')
  }
})

// Pass the edit prop to the Avatar as that will be the component the edit icon appears if valid:
function ProfileHeader({data, edit}) {

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch">
      <Grid item container direction="row" style={{backgroundImage: `url(${background})`, height: "222px"}} >
        <Grid style={{position: "relative", top: "60px", left: "50px"}}>
          <ProfileAvatar data={data} edit={edit} />
        </Grid>
      </Grid>
      <Grid container direction="row" item style={{backgroundColor: "primary", height: "118px"}}>
        <Grid item md={3} lg={2} />
        <Grid item md={3} lg={4} container alignItems="center" >
          <ThemeProvider theme={theme} > 
            <Typography style={{paddingLeft: '80px'}}>{data.name}</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item md={6} lg={6} container alignItems="center">
          <ProfileInfo data={data} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProfileHeader
