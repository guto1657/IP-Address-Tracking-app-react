import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import './styles.css';

export const LocationInfoContainer = () => {
  const Context = useAppContext();
  const [appState, actions] = Context;

  const isLocationEmpty = Object.keys(appState.location).length === 0;

  return (
    <div className="LocationWrapper">
      <div className="row">
        <div className="col-4">
          <h4>ip address</h4>
          <span>
            {!isLocationEmpty && appState.error.hasError === false
              ? appState.location.ip
              : ''}
          </span>
        </div>
        <div className="col-4">
          <h4>location</h4>
          <span>
            {!isLocationEmpty && appState.error.hasError === false
              ? `${appState.location.location.region}, ${appState.location.location.country}`
              : ''}
          </span>
        </div>
        <div className="col-4">
          <h4>timezone</h4>
          <span>
            {!isLocationEmpty && appState.error.hasError === false
              ? appState.location.location.timezone
              : ''}
          </span>
        </div>
        <div className="col-4">
          <h4>isp</h4>
          <span>
            {!isLocationEmpty && appState.error.hasError === false
              ? appState.location.isp
              : ''}
          </span>
        </div>
      </div>
    </div>
  );
};
