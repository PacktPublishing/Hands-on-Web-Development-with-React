import React, { Component } from 'react';
import './App.css';
// import List from './components/List';
// import JobItem from './components/JobListElement';
// import SimpleJobElement from './components/SimpleJobElement';
// import jobs from './data/jobs';
import JobCreationForm from './components/JobCreationForm';

class App extends Component {
  state = { isFormVisible: true };

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
            Understanding Local State in React
          </h1>
        </header>
        <button onClick={this.toggleFormVisible}>
          {this.state.isFormVisible ?
            'Hide form' :
            'Show form'
          }
        </button>
        <div style={{ visibility: this.state.isFormVisible ? 'visible' : 'hidden' }}>
          <JobCreationForm/>
        </div>
        {/*<List items={jobs} itemElement={JobItem} />*/}
      </div>
    );
  }
}

export default App;
