import React from 'react';
import LocationCityIcon from '@material-ui/icons/LocationCity';


const CharityTile = ({ doc }) => {

  const {name, bio, theme, city, state} = doc;

  return (
    <>
      <div>
        <LocationCityIcon />
        <div>{name}</div>
        <div>{bio}</div>
        <div>{theme}</div>
        <div>{`${city}, ${state}`}</div>
      </div>
    </>
  );

}


export default CharityTile;