import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Card } from 'antd';

const PersonalMessage = ({ items }) => {
  return (
    <Card
      style={{
        margin: '2rem 0'
      }}
    >
      <h2>Personalized message</h2>
      <Input.TextArea
        placeholder="Have a message?  Pen it down!"
        rows={4}
        style={{
          maxWidth: 500
        }}
      />
    </Card>
  );
};

export default PersonalMessage;