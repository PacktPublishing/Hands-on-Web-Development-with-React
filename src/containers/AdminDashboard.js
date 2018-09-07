import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
import AnalyticsAPI from '../api/AnalyticsAPI';
import Spinner from '../components/Spinner';

export default class AdminDashboard extends React.Component {
  state = {
    loading: false,
    analytics: undefined,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const { success, error, response } = await AnalyticsAPI.getAnalyticsMocked();
    if (success) {
      this.setState({
        analytics: response.data,
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
    if (this.state.loading || this.state.analytics === undefined) {
      return (
        <Spinner />
      );
    }

    return (
      <div>
        <LineChart width={800} height={400} data={this.state.analytics}>
          <XAxis dataKey="label" />
          <YAxis  />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="clicks" stroke="#8884d8" />
          <Line type="monotone" dataKey="views" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}
