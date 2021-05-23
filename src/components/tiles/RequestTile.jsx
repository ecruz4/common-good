import React, { useState } from 'react';
import LocationCityIcon from '@material-ui/icons/LocationCity';

/*
- Charity request tile (profile page)**
    - Data required
        - Request object (mapped over in parent component)
            - title
            - date
            - description
            - quantity
            - emergency
*/

/*
  {
    "org_id":"mVYqsR5DJDbMoI51VlmZBrceX6Y2","title":"Desks",
    "description":"We urgently need desks for our students.",
    "quantity":5,
    "emergency":true,
    "date":{"seconds":1621699200,"nanoseconds":0}
  }
*/


const RequestTile = ({ doc, isProfilePage }) => {

  const { title, description, quantity, emergency, date } = doc;

  return (
    <>
      {isProfilePage ?

        <div>
          <div>{title}</div>
          <div>{description}</div>
          <div>{`x ${quantity}`}</div>
          {emergency ? <div>Emergency</div> : <></>}
        </div> :

        <div>
          <LocationCityIcon />
          <div>{title}</div>
          <div>{description}</div>
          <div>{`x ${quantity}`}</div>
          {emergency ? <div>Emergency</div> : <></>}
        </div>

      }
    </>
  );

}




export default RequestTile;