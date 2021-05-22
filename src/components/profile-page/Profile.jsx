import React from 'react'
import ProfileAbout from './ProfileAbout'
import ProfileAvatar from './ProfileAvatar'
import ProfileFeed from './ProfileFeed'
import ProfileHeader from './ProfileHeader'
import ProfileInfo from './ProfileInfo'

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <ProfileInfo />
      <ProfileAvatar />
      <ProfileAbout />
      <ProfileFeed />
    </div>
  )
}

export default Profile
