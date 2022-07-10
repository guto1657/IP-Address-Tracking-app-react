import React from 'react';
import { Heading } from '../../components/Heading';
import { LocationInfoContainer } from '../../components/LocationInfoContainer';
import { Map } from '../../components/MapContainer';
import { SearchField } from '../../components/SearchField';
import './styles.css';

export const Home = () => {
  return (
    <>
      <div className="container">
        <Heading titulo={'IP Address Tracker'} />
        <SearchField />
        <LocationInfoContainer />
      </div>
      <div className="bg"></div>
      <div className="map">
        <Map />
      </div>
    </>
  );
};
