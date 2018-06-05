import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class List extends Component {
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

List.propTypes = {
  items: PropTypes.array.isRequired,
  itemElement: PropTypes.func.isRequired,
};
