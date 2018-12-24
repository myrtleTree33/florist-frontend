import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'antd';

import MarginDiv from '../util/MarginDiv';
import Viewer from './viewer/Viewer';
import Search from './search/Search';
import Hero from './Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <Viewer />
    </div>
  );
};

export default Home;
