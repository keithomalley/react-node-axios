var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var ProjectDetails = require('./Project');

function ProjectList (props) {
  if(props.isLoading === true){
    return <p className='text-center'>Loading</p>
  };

  var projectDetails = [];
  if(props.projects.data.length > 0){
    for(i=0; i < props.projects.data.length; i++){
      projectDetails.push( <ProjectDetails project={props.projects.data[i]} key={i} /> );
    }
  }

  return(
    <div>
      <header>
        <h1>Projects</h1>
        <Link to="/projects/new">New Project</Link>
      </header>
      {projectDetails}
    </div>
  );
}

ProjectList.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

module.exports = ProjectList;
