import React from 'react';
import { Link } from 'react-router-dom';
import './JobListElement.css';

export const JobListElementMetaItem = ({
  emoji,
  metaItem,
  label = '',
}) =>
  <span>{emoji} {metaItem} {label}</span>;

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

export const JobListElementStats = ({ views, clicks }) =>
  <p className="job_info">
    <JobListElementMetaItem
      emoji="👁"
      metaItem={views}
      label="Views"
    />
    {' | '}
    <JobListElementMetaItem
      emoji="👆"
      metaItem={clicks}
      label="Clicks"
    />
  </p>;

const JobListElement = ({
  title,
  company,
  location,
  salary,
  slug,
  views,
  clicks,
  withStats,
  hasEditPermission,
}) =>
  <Link to={hasEditPermission ? `/manage/${slug}` : `/job/${slug}`} className="job-item">
    <div>
      <h2 className="job-item_title">
        {title}
      </h2>
      <JobListElementMeta
        company={company}
        location={location}
        salary={salary}
      />
      {withStats &&
        <JobListElementStats
          views={views}
          clicks={clicks}
        />
      }
    </div>
  </Link>;

JobListElement.defaultProps = {
  location: 'Not specified',
  salary: 'Not given',
  views: 0,
  clicks: 0,
  withStats: false,
  hasEditPermission: false,
};

const JobListElementHoC = (withStats, hasEditPermission) =>
  (props) =>
    <JobListElement
      withStats={withStats}
      hasEditPermission={hasEditPermission}
      {...props}
    />;

export default JobListElementHoC;
