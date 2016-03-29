/*
    This container component/controller contains the business logic for the
    list of projects. It makes an asynchronous request to the API for projects
    data and renders the ProjectList view. The ProjectList view itself displays
    either a loading message or the projects as data when they have been retrieved
*/

var React = require('react');
var Projects = require('../models/Project');
var ProjectList = require('../components/ProjectList');

var ProjectsContainer = React.createClass({
  // contextTypes tells the app that this component takes a router object
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // getInitialState is for setting the default state of the variables attached to the component
  getInitialState: function(){
    return {
      isLoading: true,
      projects: {}
    }
  },
  // componentDidMount runs when the component finishes mounting on the DOM
  componentDidMount: function(){
    // This queries the model for the projects and then updates the state when they've been returned
    Projects.findAll()
    .then(function(returned_projects){
      this.setState({
          isLoading: false,
          projects: returned_projects
      })
      // the function has to be bound to the component to use the 'this' keyword
    }.bind(this) )
  },
  // the render function is abstracted from the actual views, but passes the state/data to the component that we want to render as a view
  render: function(){
    return(
      <ProjectList
        isLoading={this.state.isLoading}
        projects={this.state.projects} />
    );
  }
});

module.exports = ProjectsContainer;
