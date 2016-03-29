var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var ProjectsContainer = require('../containers/ProjectsContainer');
var ProjectFormContainer = require('../containers/ProjectFormContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ProjectsContainer} />
      <Route path='projects' component={ProjectsContainer} />
      <Route path='projects/new' component={ProjectFormContainer} />
    </Route>
  </Router>
);

module.exports = routes;
