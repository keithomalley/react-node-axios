/*
    This component/view is a template for the TextInput. It spits out a div,
    a label, and an input element which has its value tied to the data that
    is passed to it by React. This means that the data/state of the input can
    be validated easily as the value is passed through the react render method
    and the controller/container for the Form dictates what can modify the value.
*/

var React = require('react');

// React components can be created either with the createClass method (seen here),
// or as stateless functions.

var TextInput = React.createClass({
  // All react components require at least a render function
  render: function(){
    return(
      <div className='field'>
        <label>{this.props.label}</label><br />
        <input
          type='text'
          name={this.props.binding}
          value={this.props.value}
          placeholder={this.props.label}
          onChange={this.props.handleChange} />
      </div>
    )  }
});

module.exports = TextInput;
