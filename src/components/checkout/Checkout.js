import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';

const Checkout = ({ cart }) => {
  const { items, personalMessage, specialRequest } = cart;

  return (
    <WideReadableDiv>
      <PageHeader text="Checkout" />
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
          Proceed to payment
        </Button>
      </div>
    </WideReadableDiv>
  );
};

export default Checkout;
