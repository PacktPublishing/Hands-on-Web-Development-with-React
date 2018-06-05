import React from 'react';
import TextInputField from './form-elements/TextInputField';
import CheckboxField from './form-elements/CheckboxField';
import SelectField from './form-elements/SelectField';
import ConsentInput from './form-elements/ConsentInput';
import './JobCreationForm.css';

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
  acceptedToS: false,
  subscribedToNewsletter: false,
};

const isFormDataValid = (state) =>
  state.title.length >= 10 &&
  state.company.length > 0 &&
  state.salary.length > 0 &&
  state.acceptedToS;

export default class JobCreationForm extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    if (type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
    if (name === 'title' && value.length >= 10) {
      this.setState({ titleError: false });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };


  handleBlur = (e) => {
    const { name } = e.target;
    if (name === 'title') {
      this.setState({ titleError: this.state.title.length < 10 });
    }
  };

  render() {
    const enabled = isFormDataValid(this.state);
    return (
      <form
        className="job-form"
        onSubmit={this.handleSubmit}
      >
        <TextInputField
          name="title"
          label="Title"
          onChange={this.handleChange}
          value={this.state.title}
          required={true}
          onBlur={this.handleBlur}
        />
        {this.state.titleError ?
          <p className="job-form__error-label">
            Should be at least 10 characters long.
          </p> :
          null
        }
        <TextInputField
          name="company"
          label="Company"
          onChange={this.handleChange}
          value={this.state.company}
          required={true}
        />
        <TextInputField
          name="salary"
          label="Salary"
          onChange={this.handleChange}
          value={this.state.salary}
          required={true}
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
        <ConsentInput
          onChange={this.handleChange}
          acceptedToS={this.state.acceptedToS}
          subscribedToNewsletter={this.state.subscribedToNewsletter}
        />
        <button
          className="job-form__button"
          disabled={!enabled}
        >
          Submit Job
        </button>
      </form>
    );
  }
}
