import React from "react";
import AllOffers from "../AllOffers";
import AllRequests from "../AllRequests";

function ProfileFeed({ data }) {
  return (
    <div
      style={{
        backgroundColor: "#FFB341",
        height: "80vh",
        borderRadius: "15px 0px 0px 0px",
        padding: "40px",
      }}
    >
      {data.type === "org" ? (
        <AllRequests uid={data.uid} />
      ) : (
        <AllOffers uid={data.uid} />
      )}
    </div>
  );
}

export default ProfileFeed;
