import React from 'react';
import { Link } from 'react-router-dom';
import './JobListElement.css';

export const JobListElementMetaItem = ({
  emoji,
  metaItem,
}) =>
  <span>{emoji} {metaItem}</span>;

export const JobListElementMeta = ({ company, location, salary }) =>
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
  </p>;

const JobListElement = ({ title, company, location, salary, slug }) =>
  <Link to={`/job/${slug}`} className="job-item">
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
  </Link>;

JobListElement.defaultProps = {
  location: 'Not specified',
  salary: 'Not given',
};

export default JobListElement;
