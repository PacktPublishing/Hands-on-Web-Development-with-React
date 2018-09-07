import React from 'react';

export default class Timer extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.interval_ = setInterval(() =>
      this.setState({ date: new Date }), 1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.interval_);
  }

  render() {
    return(
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }

}
