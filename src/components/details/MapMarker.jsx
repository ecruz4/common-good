import React from "react";
import { Avatar } from "@material-ui/core";

export default function MapMarker({ pic }) {
  return (
    <Avatar
      src={pic}
      style={{
        height: "30px",
        width: "30px",
        border: "2px solid rgb(33,150,243)",
      }}
    />
  );
}
