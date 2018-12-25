import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import MarginDiv from '../util/MarginDiv';
import ImageCarousel from './ImageCarousel';
import ItemDescription from './ItemDescription';
import WideReadableDiv from '../util/WideReadableDiv';

const Item = ({ item }) => {
  return (
    <WideReadableDiv>
      <Row>
        <Col span={12}>
          <ImageCarousel item={item} />
        </Col>
        <Col span={12}>
          <ItemDescription item={item} />
        </Col>
      </Row>
    </WideReadableDiv>
  );
};

export default Item;
