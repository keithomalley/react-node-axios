var React = require('react');

/*
    React components can be made as pure functions such as the Tag
    component here.
*/

function Tag (props){
  return(
    <span>{props.title}</span>
  )
};

function ProjectDetails(project_data){
  var data = project_data.project;

  // mapping the data in the technology_used to Tag components, this would be
  // easier in ES2015 using the newer map() function, however we can create an
  // array of Tag components with a for loop this way
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

module.exports = ProjectDetails;
