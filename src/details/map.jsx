import React from 'react';
import zipcodes from 'zipcodes';
import GoogleMapReact from 'google-map-react';
import config from '../config';
/* eslint-disable react/prop-types */

const RandomComponent = () => (
  <div
    style={{
      // padding:10,
      // margin:20,
      // display:"inline-block",
      // backgroundColor: "#1C89BF",
      // borderRadius: "50%",
      // width:5,
      // height:5,
      // border: "2px solid #FFFFFF"
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '18px',
      height: '18px',
      backgroundColor: '#1C89BF',
      border: '2px solid #fff',
      borderRadius: '100%',
      userSelect: 'none',
      // transform: translate(-50%, -50%),
      // &:hover {
      //   z-index: 1,
      // }
    }}
  />
);

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
          />
        </GoogleMapReact>
      </div>
  )
}