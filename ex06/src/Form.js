import React, { Component } from "react";

class Form extends Component {
  initialState = {
    firstName: "",
    lastName: "",
  };
  state = this.initialState;

  handleChange = (x) => {
    const { name, value } = x.target;
    // why name is inside this square brackets don't understande name: value
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    // console.log(this.state);
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}
export default Form;
