/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import zipcodes from 'zipcodes';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ForumIcon from '@material-ui/icons/Forum';
import UserContext from '../../contexts/UserContext';

function ProfileInfo({ data }) {
  const location = zipcodes.lookup(data.zipcode);

  const { userInfo } = useContext(UserContext);

  return (
    <Grid item container justify="flex-end" spacing={8} align="center">
      {userInfo && userInfo.uid === data.uid ? null :
      <Grid item>
        <Link
          key="chat"
          to={{
            pathname: `/chat/${data.uid}`,
            state: {
              userId: data.uid,
            },
          }}
        >
          <IconButton aria-label="chat">
            <ForumIcon />
          </IconButton>
        </Link>
      </Grid>}
      <Grid item>
        <Typography
          color="textSecondary"
          style={{ paddingRight: '60px', borderRight: '2px solid black' }}
        >
          {data.email}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          color="textSecondary"
          style={{ paddingRight: '60px', borderRight: '2px solid black' }}
        >
          {data.phone}
        </Typography>
      </Grid>
      <Grid item style={{ marginRight: '40px' }}>
        {location ? (
          <Typography color="textSecondary">
            {location.city}, {location.state}
          </Typography>
        ) : (
          ''
        )}
      </Grid>
    </Grid>
  );
}

export default ProfileInfo;
