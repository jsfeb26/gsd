import React from 'react';
import Router from 'react-router';
import createRoutes from '../routes';
import { Provider } from 'redux';

const getFetchData = (component = {}) => {
  // recursively go through all of the components in the routes
  // and if they have a mehtod called fetchData then call it
  // Wrapped Component is from react-router?
  return component.WrappedComponent ? getFetchData(component.WrappedComponent) : component.fetchData;
};

export function createTransitionHook(store) {
  return (nextState, transition, callback) {
    const { params, location: { query } } = nextState;
  };
};
