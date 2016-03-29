var React = require('react');
var PropTypes = React.PropTypes;

var TextInput = React.createClass({
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
