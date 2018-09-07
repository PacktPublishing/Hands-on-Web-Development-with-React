import React, { Component } from 'react';
import './JobListElement.css';

export default class SimpleJobElement extends Component {
  render() {
    const { title } = this.props;
    return (
      <a href="#" className="job-item">
        <div>
          <h2 className="job-item_title">
            # {title}
          </h2>
        </div>
      </a>
    );
  }
}
