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
  {value: 'Wooho!', label: 'Another option' },
  {value: 'Other', label: 'Other' },
];

export default class JobCreationForm extends React.Component {
  handleChange(e) {
    const { type, name, value, checked } = e.target;
    if (type === 'checkbox') {
      console.log(name, ' ==> ', checked);
    } else {
      console.log(name, ' ==> ', value);
    }
  }
  render() {
    return (
      <form>
        <TextInputField
          name="title"
          label="Title"
          onChange={this.handleChange}
        />
        <TextInputField
          name="company"
          label="Company"
          onChange={this.handleChange}
        />
        <TextInputField
          name="salary"
          label="Salary"
          onChange={this.handleChange}
        />
        <CheckboxField
          name="isRemoteFriendly"
          label="Remote friendly?"
          onChange={this.handleChange}
        />
        <SelectField
          name="location"
          label="Location"
          options={locationOptions}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
