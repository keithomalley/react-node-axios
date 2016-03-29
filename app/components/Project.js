var React = require('react');
var PropTypes = React.PropTypes;

function Tag (props){
  return(
    <span>{props.title}</span>
  )
};

function ProjectDetails(project_data){
  var data = project_data.project;
  var techs = [];
  for(i=0;i<data.technology_used.length;i++){
    techs.push(<Tag title={data.technology_used[i]} key={"tag" + i} />);
  }
  return(
    <div className='project'>
      <h2>{data.title}</h2>
      <p className="date">{data.date} - View on <a href={data.github}>Github</a></p>
      <p>{data.description}</p>
      <div className='tags'>
        {techs}
      </div>
    </div>
  );
}

ProjectDetails.propTypes = {

}

module.exports = ProjectDetails;
