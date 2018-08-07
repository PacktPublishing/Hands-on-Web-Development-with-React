import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Navigation from './components/Navigation';
import theme from './theme';
import JobListPage from './containers/JobListPage';
import CreateJobPage from './containers/CreateJobPage';
import LoginPage from './containers/LoginPage';
import localStorage from 'store2';
import AuthAPI from './api/AuthAPI';

const NotFound = () => <div>404 Page</div>;

const Page = styled.div`
  max-width: 75%;
  margin: 0 auto;
`;

class App extends Component {
  state = { user: undefined };

  componentDidMount = async () => {
    const user = localStorage.get('user');
    if (user && user.sessionToken) {
      const { success } = await AuthAPI.checkSessionTokenMocked(user.sessionToken);
      if (success) {
        this.setState({ user });
      } else {
        localStorage.remove('user');
      }
    }
  };

  onLogin = (user) => {
    localStorage.set('user', user);
    this.setState({ user });
    this.props.history.push('/');
  };

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.remove('user');
    this.setState({ user: undefined });
    this.props.history.push('/');
  };

  render() {
    const isLoggedIn = this.state.user && this.state.user.sessionToken;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              Working With an API
            </h1>
          </header>
          <Navigation isLoggedIn={isLoggedIn} onLogout={this.handleLogout} />
          <Page>
            <Switch>
              <Route exact path="/" component={JobListPage} />
              <Route
                exact
                path="/add-job"
                component={() =>
                  isLoggedIn ?
                    <CreateJobPage />:
                    <Redirect to={'/login'} />
                }
              />
              <Route
                exact
                path="/login"
                component={() => isLoggedIn ?
                  <Redirect to={'/'}/> :
                  <LoginPage onLogin={this.onLogin} />}
              />
              <Route component={NotFound} />
            </Switch>
          </Page>
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
