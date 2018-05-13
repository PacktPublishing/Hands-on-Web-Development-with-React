import React, { Component } from 'react';

export default class JobListElement extends Component {
  render() {
    const { items, itemElement: Item } = this.props;
    return (
      <div>
        {items.map(item =>
          <Item
            {...item}
            key={item.id}
          />
        )}
      </div>
    );
  }
}
