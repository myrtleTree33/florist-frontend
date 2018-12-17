import React from 'react';

const PageHeader = ({ text }) => (
  <div
    style={{
      textAlign: 'center',
      margin: '2rem 0'
    }}
  >
    <h1>{text}</h1>
  </div>
);

export default PageHeader;
