import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'antd';

import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';

const Cart = ({ items }) => {
  return (
    <WideReadableDiv>
      <PageHeader text="Cart" />
      hello world
    </WideReadableDiv>
  );
};

export default Cart;
