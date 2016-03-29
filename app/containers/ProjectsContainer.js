var React = require('react');
var Projects = require('../models/Project');
var ProjectList = require('../components/ProjectList');

var ProjectsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      projects: {}
    }
  },
  componentDidMount: function(){
    Projects.findAll()
    .then(function(returned_projects){
      this.setState({
          isLoading: false,
          projects: returned_projects
      })
    }.bind(this) )
  },
  render: function(){
    return(
      <ProjectList
        isLoading={this.state.isLoading}
        projects={this.state.projects} />
    );
  }
});

module.exports = ProjectsContainer;
