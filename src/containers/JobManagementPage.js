import React from 'react';
import { Link } from 'react-router-dom';
import SubtleErrorBox from '../components/SubtleErrorBox';
import Spinner from '../components/Spinner';
import JobsAPI from '../api/JobsAPI';
import JobCreationForm from '../components/JobCreationForm';
import { SubtleButton } from '../components/Button';

export default class JobManagementPage extends React.Component {
  state = {
    job: undefined,
    initialLoading: false,
    initialLoadingError: undefined,
    loading: false,
    error: undefined,
  };

  componentDidMount = async () => {
    this.setState({ initialLoading: true });
    const { success, response, error } = await JobsAPI.getJobMocked(
      this.props.match.params.slug
    );
    if (success) {
      this.setState({
        job: response.data,
        initialLoading: false,
        initialLoadingError: undefined,
      });
    } else {
      this.setState({
        initialLoadingError: error,
        initialLoading: false,
      });
    }
  };

  handleSubmit = async (job) => {
    this.setState({ loading: true });
    const { success, response, error } = await JobsAPI.addJobMocked(job);
    if (success) {
      this.setState({
        job: response.data,
        submissionCompleted: true,
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

  handleDelete = async () => {
    this.setState({ loading: true });
    const { success, response, error } = await JobsAPI.deleteJobMocked(this.state.job.id);
    if (success) {
      this.setState({
        job: response.data,
        deletionCompleted: true,
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
    if (this.state.initialLoading) {
      return (
        <Spinner />
      );
    }

    if (this.state.initialLoadingError || this.state.job === undefined) {
      return (
        <SubtleErrorBox label={this.state.initialLoadingError} />
      );
    }

    if (this.state.submissionCompleted || this.state.deletionCompleted) {
      return (
        <div>
          {this.state.submissionCompleted &&
            <p>Successfully updated job: {this.state.job.unid}</p>}
          {this.state.deletionCompleted &&
            <p>Successfully deleted job posting.</p>}
          <Link to="/manage">
            Back to Job Management
          </Link>
        </div>
      );
    }

    return (
      <div>
        <JobCreationForm
          defaultState={this.state.job}
          onSubmit={this.handleSubmit}
          isSubmitting={this.state.loading}
        />
        {this.state.error && <SubtleErrorBox label={this.state.error} />}

        {this.props.permissions.jobs.delete &&
          <div style={{ marginTop: 24 }}>
            <SubtleButton onClick={this.handleDelete}>
              Delete this posting
            </SubtleButton>
          </div>}
      </div>
    );
  }
}
