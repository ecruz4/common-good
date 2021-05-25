import React, { useState, useEffect } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, makeStyles} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import AllCharities from './AllCharities';
import firestore from '../db/firebase';


const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 30,
    marginBottom: 10,
    display: 'block'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  }

}));

const SearchOrgs = () => {

  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [criteria, setCriteria] = useState(`name`);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', searchTerm);
  }

  const handleChange = (e) => {
    setCriteria(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Find Charity by Name"
          color="secondary"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <FormControl className={classes.formControl}>
        <InputLabel id="charity-search-criteria" color="secondary">Criteria</InputLabel>
        <Select
          color="secondary"
          labelId="charity-search-criteria"
          id="charity-search-criteria-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={criteria}
          onChange={handleChange}
        >
          <MenuItem value='name'>Name</MenuItem>
          <MenuItem value='city'>City</MenuItem>
          <MenuItem value='theme'>Theme</MenuItem>
        </Select>
      </FormControl>

      <AllCharities searchTerm={searchTerm} criteria={criteria}/>

    </>
  );

}


export default SearchOrgs;