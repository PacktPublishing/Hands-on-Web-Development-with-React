import React from 'react';
import JobList from '../components/JobList';
import JobsAPI from '../api/JobsAPI';

export default class JobListPage extends React.Component {
  state = {
    jobs: [],
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const jobs = await JobsAPI.getJobsMocked();
    this.setState({ jobs, loading: false });
  };

  render() {
    return (
      <JobList jobs={this.state.jobs} />
    );
  }
}
