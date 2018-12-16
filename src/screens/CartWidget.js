import React from 'react';
import PropTypes from 'prop-types';

import CartWidget from '../components/cart/CartWidget';

const CartWidgetScreen = ({}) => {
  const items = [
    {
      id: '13242',
      name: 'flower config A',
      imgSrc:
        'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
    },
    {
      id: '13242',
      name: 'flower config B',
      imgSrc:
        'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
    }
  ];

  return <CartWidget items={items} />;
};

CartWidgetScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default CartWidgetScreen;
