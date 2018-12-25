import React from 'react';
import PropTypes from 'prop-types';

import ReadingDiv from '../util/ReadingDiv';
import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';

const Tos = () => {
  return (
    <WideReadableDiv>
      <PageHeader text="Terms of Service" />
      <div>This is the terms of service component</div>
    </WideReadableDiv>
  );
};

export default Tos;
