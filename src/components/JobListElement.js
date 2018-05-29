import React, { Component } from 'react';
import './JobListElement.css';

export default class JobListElement extends Component {
  render() {
    const { title, company, location, salary } = this.props;
    return (
      <a href="#" className="job-item">
        <div>
          <h2 className="job-item_title">
            {title}
          </h2>
          <p className="job_info">
            🏢{company} | 🌍{location} | 💰{salary}
          </p>
        </div>
      </a>
    );
  }
}
