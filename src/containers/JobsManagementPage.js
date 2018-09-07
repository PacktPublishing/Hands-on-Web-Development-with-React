import React from 'react';
import JobList from '../components/JobList';
import SubtleErrorBox from '../components/SubtleErrorBox';
import Spinner from '../components/Spinner';
import JobsAPI from '../api/JobsAPI';

export default class JobsManagementPage extends React.Component {
  state = {
    jobs: [],
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const { success, response, error } = await JobsAPI.getJobsToManageMocked(
      this.props.userId,
      this.props.userRole
    );
    if (success) {
      this.setState({
        jobs: response.data,
        loading: false,
        error: undefined,
      });
    } else {
      this.setState({
        error,
        loading: false,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <Spinner />
      );
    }
    if (this.state.error) {
      return (
        <SubtleErrorBox label={this.state.error} />
      );
    }
    return (
      <JobList
        jobs={this.state.jobs}
        withStats={true}
        hasEditPermission={this.props.permissions.jobs.edit}
      />
    );
  }
}
