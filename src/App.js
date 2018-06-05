import React, { Component } from 'react';
import './App.css';
import JobList from './components/JobList';
import JobCreationForm from './components/JobCreationForm';

import JobsAPI from './api/JobsAPI';

class App extends Component {
  state = {
    jobs: [],
    isFormVisible: false,
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const jobs = await JobsAPI.getJobs();
    this.setState({ jobs, loading: false });
  };

  toggleFormVisible = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Prop Checking with PropTypes
          </h1>
        </header>
        <button onClick={this.toggleFormVisible}>
          {this.state.isFormVisible ?
            'Hide form' :
            'Show form'
          }
        </button>
        <div style={{ display: this.state.isFormVisible ? 'block' : 'none' }}>
          <JobCreationForm/>
        </div>
        <JobList jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;
