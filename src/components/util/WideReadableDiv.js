import React from 'react';

const WideReadableDiv = ({ children, maxWidth = 1072 }) => (
  <div
    style={{
      minHeight: '80vh'
    }}
  >
    <div
      style={{
        margin: 'auto',
        width: '100%',
        maxWidth
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
