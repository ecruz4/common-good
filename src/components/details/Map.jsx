import React from "react";
import zipcodes from "zipcodes";
import GoogleMapReact from "google-map-react";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import config from "../../config.js";
import MapMarker from "./MapMarker";

export default function Map({ zip, pic }) {
  if (!zip) {
    return null;
  }
  const apiKey = config.googleApiKey;
  const zipInfo = zipcodes.lookup(zip);
  const { latitude, longitude } = zipInfo;
  const center = {
    lat: latitude,
    lng: longitude,
  };
  const zoom = 11;

  return (
    <div
      style={{
        width: "80%",
        height: "500px",
        display: "flex",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapMarker lat={latitude} lng={longitude} pic={pic} />
      </GoogleMapReact>
    </div>
  );
}
