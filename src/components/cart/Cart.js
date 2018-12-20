import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'antd';

import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';
import CartItem from './CartItem';
import DeliveryInfo from './DeliveryInfo';
import PersonalMessage from './PersonalMessage';
import SpecialRequest from './SpecialRequest';

const Cart = ({ cart, onChange, onRemoveItem }) => {
  const { items, personalMessage, specialRequest } = cart;

  const handleChange = (field, e) => {
    onChange({ field, value: e.target.value });
  };

  const handleItemQtyChange = (id, v) => {
    if (v > -1) {
      onChange({ field: 'items', id, value: v });
    }
  };

  const handleRemoveItem = id => onRemoveItem(id);

  return (
    <WideReadableDiv>
      <PageHeader text="Cart" />
      <div>
        {items.length !== 0 ? (
          items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onChange={handleItemQtyChange}
              onRemoveItem={handleRemoveItem}
            />
          ))
        ) : (
          <div
            style={{
              textAlign: 'center'
            }}
          >
            No items in cart. Shop now!
          </div>
        )}
        {/* <CartItem onChange={handleChange} quantity={quantity} /> */}
        {/* <CartItem onChange={handleChange} quantity={quantity} /> */}
      </div>
      <PersonalMessage onChange={e => handleChange('personalMessage', e)} />
      <SpecialRequest onChange={e => handleChange('specialRequest', e)} />
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
