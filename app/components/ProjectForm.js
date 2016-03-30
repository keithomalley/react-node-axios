var React = require('react');
var PropTypes = React.PropTypes;
// The ReactRouter Link Class creates an anchortag using ReactRouters own classes and ensures routes arent muddled
var Link = require('react-router').Link;

// props are passed to these types of functions as params in the component when its created, eg:
// <ProjectForm onSubmit={this.handleSubmit} /> will be available as props.onSubmit here

// any other components passed to the form object are rendered out through this props.children tag

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
