import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../Wrappers/FlexContainer   ';

const FlexContainer = (props) => {
  const { children, jc, ai } = props;

  const inlineStyles = {
    jc,
    ai,
  };

  return (
    <div style={inlineStyles} className={styles.wrapper}>
      {children}
    </div>
  );
};
FlexContainer.propTypes = {
  children: PropTypes.element.isRequired,
  jc: PropTypes.string.isRequired,
  ai: PropTypes.string.isRequired,
};

export default FlexContainer;
