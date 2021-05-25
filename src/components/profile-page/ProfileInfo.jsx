/* eslint-disable react/prop-types */
import React from 'react'
import zipcodes from 'zipcodes';
import { Grid } from '@material-ui/core';

function ProfileInfo({data}) {
  const location = zipcodes.lookup(data.zipcode)
  return (
    <Grid item container justify="flex-end" align="center">
      <span>{data.email}</span>
      <span>{data.phone}</span>
      <span>{location.city}, {location.state}</span>
    </Grid>
  )
}

export default ProfileInfo
