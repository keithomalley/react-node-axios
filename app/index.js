var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.js');

/* =============================================================================
    Render the react dom to the "app" div, any changes will refresh this
    virtual DOM. the routes we configure in the above routes file dictate
    what component gets rendered to which paths
============================================================================= */

ReactDOM.render(
  routes,
  document.getElementById('app')
);
