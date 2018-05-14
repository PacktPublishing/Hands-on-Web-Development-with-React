import React from 'react';
import TextInputField from './form-elements/TextInputField';
import CheckboxField from './form-elements/CheckboxField';
import SelectField from './form-elements/SelectField';

const locationOptions = [
  {value: '', label: 'Blank' },
  {value: 'Berlin', label: 'Berlin' },
  {value: 'San Francisco', label: 'San Francisco' },
  {value: 'London', label: 'London' },
  {value: 'Austin', label: 'Austin' },
  {value: 'Tokyo', label: 'Tokyo' },
  {value: 'Barcelona', label: 'Barcelona' },
  {value: 'Other', label: 'Other' },
];

const initialState = {
  title: '',
  company: '',
  salary: '',
  isRemoteFriendly: false,
  location: '',
};

export default class JobCreationForm extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    if (type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          name="title"
          label="Title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <TextInputField
          name="company"
          label="Company"
          onChange={this.handleChange}
          value={this.state.company}
        />
        <TextInputField
          name="salary"
          label="Salary"
          onChange={this.handleChange}
          value={this.state.salary}
        />
        <CheckboxField
          name="isRemoteFriendly"
          label="Remote friendly?"
          onChange={this.handleChange}
          value={this.state.isRemoteFriendly}
        />
        <SelectField
          name="location"
          label="Location"
          options={locationOptions}
          onChange={this.handleChange}
          value={this.state.location}
        />
        <button>Submit Job</button>
      </form>
    );
  }
}
