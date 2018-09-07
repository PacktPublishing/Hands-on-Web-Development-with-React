import React from 'react';
import './Counter.css';

const button = (onClick, label) =>
  React.createElement(
    'button',
    { onClick },
    `${label}`
  );

const counterText = (label, count) =>
  React.createElement(
    'span',
    { className: count < 0 ? 'counter-box--danger' : '' },
    `${label}`
  );

const addTwo = (a, b) => a + b;

const increment = (amount) => (state) => ({
  counter: addTwo(state.counter, amount),
});

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increment = () =>
    this.setState(increment(1));

  decrement = () =>
    this.setState(increment(-1));

  render() {
    const { counter } = this.state;
    const { name } = this.props;
    return(
      React.createElement(
        'div',
        { className: 'counter-box'},
        [
          button(this.increment, '+1'),
          counterText(`${name} ${counter}`, counter),
          button(this.decrement, '-1')
        ]
      )
    )
  }
}
