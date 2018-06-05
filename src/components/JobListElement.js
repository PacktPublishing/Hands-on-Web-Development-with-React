import React, { Component } from 'react';
import './JobListElement.css';

export class JobListElementMetaItem extends Component {
  render() {
    return (
      <span>{this.props.emoji} {this.props.metaItem}</span>
    );
  }
}

export class JobListElementMeta extends Component {
  render() {
    const { company, location, salary } = this.props;
    return (
      <p className="job_info">
        <JobListElementMetaItem
          emoji="🏢"
          metaItem={company}
        />
        {' | '}
        <JobListElementMetaItem
          emoji="🌍"
          metaItem={location}
        />
        {' | '}
        <JobListElementMetaItem
          emoji="💰"
          metaItem={salary}
        />
      </p>
    );
  }
}

export default class JobListElement extends Component {
  render() {
    const { title, company, location, salary } = this.props;
    return (
      <a href="#" className="job-item">
        <div>
          <h2 className="job-item_title">
            {title}
          </h2>
          <JobListElementMeta
            company={company}
            location={location}
            salary={salary}
          />
        </div>
      </a>
    );
  }
}
