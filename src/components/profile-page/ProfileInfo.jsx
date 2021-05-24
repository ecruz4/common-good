/* eslint-disable react/prop-types */
import React from 'react'

function ProfileInfo({data}) {
  return (
    <div>
      <p>Profile Info</p>
      <span>{data.email}</span>
      <span>{data.phone}</span>
      <span>{data.city}, {data.state}</span>
    </div>
  )
}

export default ProfileInfo
