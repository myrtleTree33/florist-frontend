import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Badge, Button, List } from 'antd';
import { Link } from 'react-router-dom';
import SideSpan from '../util/SideSpan';
import SideSpanClear from '../util/SideSpanClear';

import './CartWidget.css';

const CartWidget = ({ cart, showCheckoutBtn = true }) => {
  const cart2 = cart || {};
  const { items = [] } = cart2;

  return (
    <div
      style={{
        width: 400
      }}
    >
      {showCheckoutBtn ? <div>You have {items.length} items.</div> : <div />}
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
                width: '100%',
                textAlign: 'right',
                maxWidth: 100
              }}
            >
              <Badge
                count={0}
                showZero
                style={{
                  backgroundColor: '#fff',
                  color: '#999',
                  boxShadow: '0 0 0 1px #d9d9d9 inset'
                }}
              >
                <img
                  style={{
                    width: '100%',
                    maxWidth: 50
                  }}
                  alt="logo"
                  src={item.imgSrc}
                />
              </Badge>
            </span>
          </List.Item>
        )}
      />

      <div
        style={{
          margin: '1.2rem 0'
        }}
      >
        <div>
          <SideSpan align="left">
            <b>Subtotal: </b>
          </SideSpan>
          <SideSpan align="right">
            <span
              style={{
                marginLeft: '1.4rem'
              }}
            >
              ${'0.00'}
            </span>
          </SideSpan>
          <SideSpanClear />
        </div>

        <div>
          <SideSpan align="left">
            <b>Shipping: </b>
          </SideSpan>
          <SideSpan align="right">
            <span
              style={{
                marginLeft: '1.4rem'
              }}
            >
              ${'0.00'}
            </span>
          </SideSpan>
          <SideSpanClear />
        </div>

        <Divider />

        <div
          style={{
            marginTop: '1.4rem'
          }}
        >
          <SideSpan align="left">
            <b
              style={{
                fontSize: '1.5em'
              }}
            >
              Total:{' '}
            </b>
          </SideSpan>
          <SideSpan align="right">
            <span className="text-note">SGD</span>
            <span
              style={{
                fontSize: '1.5em',
                marginLeft: '1.4rem'
              }}
            >
              ${'0.00'}
            </span>
          </SideSpan>
          <SideSpanClear />
        </div>
      </div>

      {showCheckoutBtn ? (
        <Button
          type="primary"
          block
          style={{
            marginTop: '.5rem'
          }}
        >
          <Link to="/cart">Checkout</Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
};

export default CartWidget;
