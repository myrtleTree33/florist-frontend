import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Input, Row, Col, Button, Card, Icon } from 'antd';
import './CartItem.css';

const { Group: InputGroup } = Input;

const CartItem = ({ id, name, quantity, onChange }) => {
  const handleUpdate = e => {
    onChange(e.target.value);
  };
  const handleDecrement = () => {
    onChange(quantity - 1);
  };
  const handleIncrement = () => {
    onChange(quantity + 1);
  };

  return (
    <Card
      style={{
        margin: '1.5rem 0'
      }}
    >
      <Row className="vertical-align-container">
        <Col span={3}>
          <Avatar shape="square" size={64} icon="user" />
        </Col>
        <Col span={14}>
          <div>Flower combination A</div>
        </Col>
        <Col
          span={6}
          style={{
            textAlign: 'center'
          }}
        >
          <Button.Group>
            <Button
              type="primary"
              shape="circle"
              icon="down"
              onClick={handleDecrement}
            />
            <Input
              className="no-borderRadius"
              min={1}
              max={10}
              defaultValue={3}
              onChange={handleUpdate}
              style={{
                maxWidth: 50
                // margin: '0 2rem'
              }}
            />
            <Button
              type="primary"
              shape="circle"
              icon="up"
              onClick={handleIncrement}
            />
          </Button.Group>
        </Col>
        <Col span={1}>
          <Button shape="circle" icon="close" type="danger" />
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
