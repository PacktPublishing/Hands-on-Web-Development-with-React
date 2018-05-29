import React from 'react';

export default class ResizeDemo extends React.Component {
  state = { windowWidth: window.innerWidth };

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return(
      <div>
        <p>Width: {this.state.windowWidth}</p>
      </div>
    )
  }

}
