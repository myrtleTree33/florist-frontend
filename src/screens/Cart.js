import React from 'react';
import PropTypes from 'prop-types';

import Cart from '../components/cart/Cart';

const CartScreen = ({}) => {
  const items = [
    {
      id: '13242',
      name: 'flower config A'
    },
    {
      id: '13242',
      name: 'flower config B'
    }
  ];

  return <Cart items={items} />;
};

CartScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default CartScreen;
