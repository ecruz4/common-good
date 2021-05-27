/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@material-ui/core';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import fire from '../../db/firebase';

function LogoutButton() {
  const [user] = useAuthState(fire.auth);
  return (
    user && (
      <div>
        <Button
          onClick={() => fire.auth.signOut()}
          color='secondary'
        >
          Signout
        </Button>
      </div>
    )
  );
}

export default LogoutButton;
