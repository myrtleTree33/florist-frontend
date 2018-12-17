import React from 'react';

const WideReadableDiv = ({ children }) => (
  <div
    style={{
      height: '80vh'
    }}
  >
    <div
      style={{
        margin: 'auto',
        width: 1072,
        maxWidth: 1072
      }}
    >
      <div
        style={{
          margin: '2rem'
        }}
      >
        {children}
      </div>
    </div>
  </div>
);

export default WideReadableDiv;
