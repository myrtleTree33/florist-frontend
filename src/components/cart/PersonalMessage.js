import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'antd';

const PersonalMessage = ({ items }) => {
  return (
    <Card
      style={{
        margin: '2rem 0'
      }}
    >
      <h2>Personal message</h2>
    </Card>
  );
};

export default PersonalMessage;
