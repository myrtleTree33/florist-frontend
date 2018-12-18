import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'antd';

import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';
import CartItem from './CartItem';
import DeliveryInfo from './DeliveryInfo';
import PersonalMessage from './PersonalMessage';

const Cart = ({ items }) => {
  const handleChange = v => {
    console.log(v);
  };

  const quantity = 5;

  return (
    <WideReadableDiv>
      <PageHeader text="Cart" />
      <div>
        <CartItem onChange={handleChange} quantity={quantity} />
        <CartItem onChange={handleChange} quantity={quantity} />
        <CartItem onChange={handleChange} quantity={quantity} />
      </div>
      <PersonalMessage />
      <div
        style={{
          float: 'right'
        }}
      >
        <Button
          type="primary"
          size="large"
          style={{
            marginTop: '1rem'
          }}
        >
          Proceed to checkout
        </Button>
      </div>
    </WideReadableDiv>
  );
};

export default Cart;
