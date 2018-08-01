/**
 * @fileoverview A simple example of how to use react-router
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const AddJob = () => <div>Add Job Page</div>;
const Job = ({ match }) => <div>Job id: #{match.params.jobId} </div>;
const NotFound = () => <div>404 Page</div>;

export default () =>
  <Router>
    <div style={{ padding: '12px 48px' }}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-job">Add job</Link></li>
        <li><Link to="/jobs/1">Job 1</Link></li>
        <li><Link to="/jobs/2">Job 2</Link></li>
        <li><Link to="/jobs/3">Job 3</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-job" component={AddJob} />
        <Route path="/jobs/:jobId" component={Job} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>;
