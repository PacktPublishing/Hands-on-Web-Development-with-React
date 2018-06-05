import React from 'react';
import CheckboxField from './CheckboxField';

export default class ConsentInput extends React.Component {
  render() {
    const {
      acceptedToS,
      subscribedToNewsletter,
      onChange,
    } = this.props;

    return (
      <div>
        <CheckboxField
          onChange={onChange}
          name="acceptedToS"
          value={acceptedToS}
          label="Accept ToS"
        />
        <CheckboxField
          onChange={onChange}
          name="subscribedToNewsletter"
          value={subscribedToNewsletter}
          label="Send me your newsletter!"
        />
      </div>
    );
  }
}
