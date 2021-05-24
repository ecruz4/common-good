import React, { useState, useEffect } from 'react';
import { TextField, Button, makeStyles} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import AllCharities from './AllCharities';
import firestore from '../db/firebase';


const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 10,
    display: 'block'
  },
  button: {
  }
});

const SearchOrgs = () => {

  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  // let searchTerm = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', searchTerm);
  }

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Search for Charity"
          color="secondary"
          // onChange={(e) => searchTerm = e.target.value}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </form>
      <AllCharities searchTerm={searchTerm}/>

    </>
  );

}


export default SearchOrgs;