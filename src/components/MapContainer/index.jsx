import React from 'react';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useAppContext } from '../../contexts/AppContext';

import P from 'prop-types';

import marker from '../../assets/images/icon-location.svg';

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
};

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 50),
});

ChangeMapView.propTypes = {
  coords: P.arrayOf(P.string, P.number).isRequired,
};

export const Map = () => {
  const Context = useAppContext();
  const [appState, actions] = Context;

  const position =
    Object.keys(appState.location).length !== 0 &&
    appState.error.hasError == false
      ? [appState.location.location.lat, appState.location.location.lng]
      : [0, 0];

  return (
    <MapContainer
      center={position}
      zoom={15}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', overflowX: 'hidden' }}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ChangeMapView coords={position} />
    </MapContainer>
  );
};
