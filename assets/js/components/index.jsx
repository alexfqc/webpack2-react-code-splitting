import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

render(
  <Router history={browserHistory}>
    <Route
      path="/"
      getComponent={(location, cb) => {
        System.import('./App')
              .then(loadRoute(cb))
              .catch(errorLoading);
      }}
    >
      <IndexRoute
        getComponent={(location, cb) => {
          System.import('./pages/Home')
              .then(loadRoute(cb))
              .catch(errorLoading);
        }}
      />
      <Route
        path="blog"
        getComponent={(location, cb) => {
          System.import('./pages/Blog')
                .then(loadRoute(cb))
                .catch(errorLoading);
        }}
      />
      <Route
        path="about"
        getComponent={(location, cb) => {
          System.import('./pages/About')
                .then(loadRoute(cb))
                .catch(errorLoading);
        }}
      />
    </Route>
  </Router>,
  document.getElementById('app'),
);
