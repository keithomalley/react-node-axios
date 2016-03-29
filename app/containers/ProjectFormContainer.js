var React = require('react');
var PropTypes = React.PropTypes;
var Projects = require('../models/Project');
var ProjectForm = require('../components/ProjectForm');
var TextInput = require('../components/Input_Text');
var ProjectDetails = require('../components/Project');

var ProjectFormContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      project: {
        title: '',
        image: '',
        date: '',
        github: '',
        description: '',
        technology_used: []
      }
    }
  },
  handleChange: function(event){
    var temp_proj = this.state.project;
    switch(event.target.name){
      case 'title':
        temp_proj.title = event.target.value;
        break;
      case 'image':
        temp_proj.image = event.target.value;
        break;
      case 'description':
        temp_proj.description = event.target.value;
        break;
      case 'date':
        temp_proj.date = event.target.value;
        break;
      case 'github':
        temp_proj.github = event.target.value;
        break;
      case 'technology_used':
        temp_proj.technology_used = event.target.value.split(' ').join(',').split(',');
        break;
      default:
        break;
    }
    this.setState({
      project: temp_proj
    });
    console.log(this.state.project);
  },
  handleSubmit: function(e){
    e.preventDefault();
    Projects.add(this.state.project);
    this.context.router.push({
      pathname: '/'
    })
  },
  render: function() {
    return(
      <div>
        <ProjectForm project={this.state.project} onSubmit={this.handleSubmit} >
          <TextInput label='Title' binding='title' value={this.state.project.title} handleChange={this.handleChange} />
          <TextInput label='Date' binding='date' value={this.state.project.date} handleChange={this.handleChange} />
          <TextInput label='Image' binding='image' value={this.state.project.image} handleChange={this.handleChange} />
          <TextInput label='Github' binding='github' value={this.state.project.github} handleChange={this.handleChange} />
          <TextInput label='Description' binding='description' value={this.state.project.description} handleChange={this.handleChange} />
          <TextInput label='Technology Used' binding='technology_used' value={this.state.project.technology_used} handleChange={this.handleChange} />
        </ProjectForm>
        <ProjectDetails project={this.state.project} />
      </div>      
    )
  }
});

module.exports = ProjectFormContainer;
