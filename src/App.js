import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Navigation from './components/Navigation';
import theme from './theme';
import JobListPage from './containers/JobListPage';
import CreateJobPage from './containers/CreateJobPage';

const NotFound = () => <div>404 Page</div>;

const Page = styled.div`
  max-width: 75%;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              Working With an API
            </h1>
          </header>
          <Router>
            <Fragment>
              <Navigation />
              <Page>
                <Switch>
                  <Route exact path="/" component={JobListPage} />
                  <Route exact path="/add-job" component={CreateJobPage} />
                  <Route component={NotFound} />
                </Switch>
              </Page>
            </Fragment>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
