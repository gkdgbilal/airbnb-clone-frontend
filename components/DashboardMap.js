import React, { memo, useCallback, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const DashboardMap = ({ properties }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.googlePlacesAPI
  });

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: properties[0].location.lat,
    lng: properties[0].location.lng
  };

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const image =
    'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {properties.map((property, index) => (
        <Marker
          key={index}
          position={{
            lat: property.location.lat,
            lng: property.location.lng
          }}
          icon={{
            url: image,
            anchor: new window.google.maps.Point(5, 58)
          }}
        />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(DashboardMap);
