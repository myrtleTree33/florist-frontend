import React from 'react';
import PropTypes from 'prop-types';
import SideSpan from '../util/SideSpan';
import SideSpanClear from '../util/SideSpanClear';

const ItemDescription = ({ item }) => {
  const { id, name, imgSrc, price, description } = item;
  const { currency, value } = price;
  const cost = `$${value}`;

  return (
    <div>
      <div>
        <SideSpan align="left">
          <span
            style={{
              fontSize: '2rem'
            }}
          >
            {name}
          </span>
        </SideSpan>
        <SideSpan align="right">
          <span
            style={{
              fontSize: '1.2em'
            }}
          >
            {cost}
          </span>
          {/* <Button onClick={() => history.push(`/item/${id}`)}>Shop</Button> */}
        </SideSpan>
        <SideSpanClear />
      </div>
    </div>
  );
};

export default ItemDescription;
