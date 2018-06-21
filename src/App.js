import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import JobList from './components/JobList';
import Navigation from './components/Navigation';
import JobCreationForm from './components/JobCreationForm';
import { SubtleButton } from './components/Button';
import JobsAPI from './api/JobsAPI';
import theme from './theme';

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
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              Styled Components & Themes!
            </h1>
          </header>
          <Navigation />
          <SubtleButton onClick={this.toggleFormVisible}>
            {this.state.isFormVisible ?
              'Hide form' :
              'Show form'
            }
          </SubtleButton>
          <div style={{ display: this.state.isFormVisible ? 'block' : 'none' }}>
            <JobCreationForm/>
          </div>
          <JobList jobs={this.state.jobs} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
