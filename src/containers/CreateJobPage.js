import React from 'react';
import JobCreationForm from '../components/JobCreationForm';
import SubtleErrorBox from '../components/SubtleErrorBox';
import JobsAPI from '../api/JobsAPI';
import { SubtleButton } from '../components/Button'
export default class CreateJobPage extends React.Component {
  state = {
    loading: false,
    submissionCompleted: false,
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

  addNewJob = () => {
    this.setState({
      submissionCompleted: false,
      job: undefined,
    });
  };

  render() {
    return (
      <div>
        {this.state.submissionCompleted ?
          <div>
            <p>Successfully submitted job: {this.state.job.unid}</p>
            <SubtleButton onClick={this.addNewJob}>
              Add Another One?
            </SubtleButton>
          </div> :
          <JobCreationForm
            onSubmit={this.handleSubmit}
            isSubmitting={this.state.loading}
          />
        }
        {this.state.error && <SubtleErrorBox label={this.state.error} />}
      </div>
    );
  }
}
