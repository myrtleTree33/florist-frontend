import React from 'react';

const SideSpan = ({ align = 'left', children }) => (
  <span
    style={{
      float: align
    }}
  >
    {children}
  </span>
);

export default SideSpan;
