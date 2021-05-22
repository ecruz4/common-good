import React from 'react';
import zipcodes from 'zipcodes';
import GoogleMapReact from 'google-map-react';
import config from '../config';
/* eslint-disable react/prop-types */

const RandomComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const apiKey = config.googleApiKey;
  const dummyZip = 90210;
  const zipInfo = zipcodes.lookup(dummyZip);
  const { latitude, longitude } = zipInfo;
  const center = {
    lat: latitude,
    lng: longitude
  };
  const zoom = 11;
  console.log('lat', latitude);
  console.log('long', longitude);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <RandomComponent
            lat={latitude}
            lng={longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
  )
}