import React from 'react';
import './InputField.css';

export default class TextInputField extends React.Component {

  render() {
    const { label, name, onChange, value } = this.props;
    return (
      <div className="input-field">
        <label
          className="input-field__label"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          value={value}
          type="text"
          className="input-field__text-input"
          onChange={onChange}
        />
      </div>
    );
  }
}
