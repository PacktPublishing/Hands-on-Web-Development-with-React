import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import JobItem from './components/JobListElement';
import JobCreationForm from './components/JobCreationForm';
import Timer from './components/Timer';
import ResizeDemo from './components/ResizeDemo';

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
            Understanding Lifecycle Methods by Example
          </h1>
        </header>
        <ResizeDemo />
        <Timer />
        <button onClick={this.toggleFormVisible}>
          {this.state.isFormVisible ?
            'Hide form' :
            'Show form'
          }
        </button>
        <div style={{ display: this.state.isFormVisible ? 'block' : 'none' }}>
          <JobCreationForm/>
        </div>
        <List items={this.state.jobs} itemElement={JobItem} />
      </div>
    );
  }
}

export default App;
