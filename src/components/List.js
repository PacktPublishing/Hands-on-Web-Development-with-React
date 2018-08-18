import React, { Component } from 'react';
import PropTypes from 'prop-types'

const List = ({ items, itemElement: Item }) =>
  <div>
    {items.map(item =>
      <Item
        {...item}
        key={item.id}
      />
    )}
  </div>;

List.propTypes = {
  items: PropTypes.array.isRequired,
  itemElement: PropTypes.func.isRequired,
};

const ListHoC = (Item) => ({ items }) => <List items={items} itemElement={Item} />;

export default ListHoC;
