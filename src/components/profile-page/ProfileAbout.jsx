/* eslint-disable react/prop-types */
import React from 'react'

function ProfileAbout({data}) {
  return (
    <div style={{backgroundColor: "primary", height: "60vh"}}>
      <p>Profile About</p>
      <span>{data.bio}</span>
    </div>
  )
}

export default ProfileAbout
