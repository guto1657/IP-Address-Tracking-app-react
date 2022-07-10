import React from 'react';
import P from 'prop-types';
import './styles.css';

export const Heading = ({ titulo }) => {
  return <h1>{titulo}</h1>;
};

Heading.propTypes = {
  titulo: P.string.isRequired,
};
