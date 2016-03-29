var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var ProjectDetails = require('./Project');

function ProjectList (props) {
  /*
    if the controller is still loading the asynchronous projects data,
    only render a loading sign. React will update these props when the
    request returns and render the component again.
   */
  if(props.isLoading === true){
    return <p className='text-center'>Loading</p>
  };

  // Get an array of ProjectDetails components from the returned data to be rendered after
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

/*
    PropTypes allow data integrity to be written directly to the component, here
    is an example of a required bool for the loading check
*/
ProjectList.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

module.exports = ProjectList;
