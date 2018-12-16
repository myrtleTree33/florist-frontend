import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'antd';
import { Link } from 'react-router-dom';

const CartWidget = ({ items }) => {
  return (
    <div
      style={{
        width: 400,
        maxWidth: 400
      }}
    >
      You have {items.length} items.
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              // avatar={
              //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              // }
              title={<a href="https://ant.design">{item.name}</a>}
              // description={item.name}
            />

            <span
              style={{
                width: 100
              }}
            >
              <img
                style={{
                  width: '100%'
                }}
                alt="logo"
                src={item.imgSrc}
              />
            </span>
          </List.Item>
        )}
      />
      <Button
        type="primary"
        block
        style={{
          marginTop: '.5rem'
        }}
      >
        <Link to="/cart">Checkout</Link>
      </Button>
    </div>
  );
};

export default CartWidget;
