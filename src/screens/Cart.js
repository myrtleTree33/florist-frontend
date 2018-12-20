import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Cart from '../components/cart/Cart';

class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: '13242',
          name: 'flower config A',
          quantity: 3
        },
        {
          id: '1231221',
          name: 'flower config B',
          quantity: 5
        }
      ],
      personalMessage: 'Personal message field',
      specialRequest: 'Special request field'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleChange({ field, id, key, value }) {
    if (field === 'items') {
      for (let i = 0; i < this.state.items.length; i++) {
        const curr = this.state.items[i];
        if (curr.id === id) {
          this.setState({
            items: update(this.state.items, {
              [i]: { quantity: { $set: value } }
            })
          });
          return; // exit
        }
      }
    }
    this.setState({ [field]: value });
  }

  handleRemoveItem(id) {
    const stateItems = this.state.items;
    for (let i = 0; i < stateItems.length; i++) {
      const curr = stateItems[i];
      if (curr.id === id) {
        const items = [...stateItems];
        items.splice(i, 1);
        this.setState({ items });
        return;
      }
    }
  }

  render() {
    const { state, handleChange, handleRemoveItem } = this;
    return (
      <Cart
        cart={state}
        onChange={handleChange}
        onRemoveItem={handleRemoveItem}
      />
    );
  }
}

CartScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default CartScreen;
