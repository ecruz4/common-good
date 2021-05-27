import React from 'react'
import AllOffers from '../AllOffers';
import AllRequests from '../AllRequests';

function ProfileFeed({data}) {
  
  return (
    <div style={{backgroundColor: '#FFB341', height: '60vh', borderRadius: "15px 0px 0px 0px", padding: "40px"}}>
      {data.type === 'user' ? <AllOffers uid={data.uid} /> : <AllRequests uid={data.uid} />}
    </div>
  )
}

export default ProfileFeed
