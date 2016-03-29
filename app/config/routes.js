// Import react and all the react router package objects we need
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// import the component containers that we want to render for each path
// these containers act as the Controller for the logic associated with a component
var Main = require('../components/Main');
var ProjectsContainer = require('../containers/ProjectsContainer');
var ProjectFormContainer = require('../containers/ProjectFormContainer');

// configure routes to specific container components/controllers
var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={ProjectsContainer} />
      <Route path="projects" component={ProjectsContainer} />
      <Route path="projects/new" component={ProjectFormContainer} />
    </Route>
  </Router>
);

// export the routes for the main app
module.exports = routes;
