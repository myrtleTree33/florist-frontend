import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import SideSpan from '../../util/SideSpan';
import SideSpanClear from '../../util/SideSpanClear';

const ViewerItem = item => {
  const { id, imgSrc, price, description } = item;
  const { currency, value } = price || {};
  const cost = `$${value}`;

  const mainImg = imgSrc[0];

  return (
    <div
      style={{
        margin: '1.2rem 0'
      }}
    >
      <img
        src={mainImg}
        alt={description}
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />

      <div
        style={{
          marginTop: '1.4rem'
        }}
      >
        <SideSpan align="left">
          <div>Name - {cost}</div>
          <div>{description}</div>
        </SideSpan>
        <SideSpan align="right">
          <Button>Shop</Button>
        </SideSpan>
        <SideSpanClear />
      </div>
    </div>
  );
};

export default ViewerItem;
