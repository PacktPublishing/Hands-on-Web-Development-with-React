import React from 'react';
import TextInputField from './form-elements/TextInputField';
import CheckboxField from './form-elements/CheckboxField';
import SelectField from './form-elements/SelectField';
import ConsentInput from './form-elements/ConsentInput';
import { PrimaryButton } from './Button';
import './JobCreationForm.css';
import Spinner from './Spinner';
import isFormDataValid from '../utils/jobCreationFormValidator';

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

export default class JobCreationForm extends React.Component {
  state = initialState;

  componentDidMount = () => {
    if (this.props.defaultState) {
      const defaultState = {};
      Object.keys(initialState).forEach((key) => {
        defaultState[key] = this.props.defaultState[key] || initialState[key];
      });
      this.setState(defaultState);
    }
  };

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
    this.props.onSubmit(this.state);
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
        <PrimaryButton disabled={!enabled || this.props.isSubmitting}>
          Submit Job
        </PrimaryButton>
        {this.props.isSubmitting &&
          <Spinner />
        }
      </form>
    );
  }
}
