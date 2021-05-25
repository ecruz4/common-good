import React from 'react';
import zipcodes from 'zipcodes';
import GoogleMapReact from 'google-map-react';
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone';
import config from '../../config';

const MapMarkerIcon = () => (
    <RoomTwoToneIcon />
);

export default function Map() {
  const apiKey = config.googleApiKey;
  const dummyZip = 97203;
  const zipInfo = zipcodes.lookup(dummyZip);
  const { latitude, longitude } = zipInfo;
  const center = {
    lat: latitude,
    lng: longitude
  };
  const zoom = 11;

  return (
    <div style={{ height: '400', width: '50%', display: 'flex', margin: 'auto', marginTop: '20px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <MapMarkerIcon
            lat={latitude}
            lng={longitude}
          />
        </GoogleMapReact>
      </div>
  )
}