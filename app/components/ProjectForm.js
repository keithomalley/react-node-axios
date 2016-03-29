var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

function ProjectForm (props){
  return (
    <div>
      <header>
        <h1>New Project</h1>
        <Link to="/">All Projects</Link>
      </header>
      <div className='project'>
        <form onSubmit={props.onSubmit}>
          {props.children}
          <input type='submit'/>
        </form>
      </div>
    </div>
  );
}

module.exports = ProjectForm;
