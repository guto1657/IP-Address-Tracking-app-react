import React, { useCallback, useEffect, useRef } from 'react';
import Arrow from '../../assets/images/icon-arrow.svg';
import './styles.css';
import { useAppContext } from '../../contexts/AppContext/index';

export const SearchField = () => {
  const input = useRef(null);
  const isMounted = useRef(true);
  const Context = useAppContext();
  const [appState, actions] = Context;

  const handleOnClick = () => {
    actions.getLocation(input.current.value);
  };

  const handleEnterPress = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        actions.getLocation(input.current.value);
      } else {
        return;
      }
    },
    [input, actions],
  );

  useEffect(() => {
    if (isMounted) {
      actions.getLocation('');
    }

    return () => {
      isMounted.current = false;
    };
  }, [actions]);

  useEffect(() => {
    window.addEventListener('keydown', handleEnterPress);

    return () => {
      window.removeEventListener('keydown', handleEnterPress);
    };
  }, [handleEnterPress]);

  return (
    <div className="fieldWrapper">
      <input
        ref={input}
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button onClick={() => handleOnClick()}>
        <img src={Arrow} />
      </button>
    </div>
  );
};
