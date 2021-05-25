/* eslint-disable react/prop-types */
import React from 'react'
import zipcodes from 'zipcodes';

function ProfileInfo({data}) {
  const location = zipcodes.lookup(data.zipcode)
  return (
    <div>
      <span>{data.email}</span>
      <span>{data.phone}</span>
      <span>{location.city}, {location.state}</span>
    </div>
  )
}

export default ProfileInfo
