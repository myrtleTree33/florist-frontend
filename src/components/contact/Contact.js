import React from 'react';
import PropTypes from 'prop-types';
import WideReadableDiv from '../util/WideReadableDiv';
import PageHeader from '../util/PageHeader';
import { Row, Col } from 'antd';

// import ReadingDiv from '../util/ReadingDiv';

const Contact = () => {
  return (
    <div>
      <PageHeader text="Contact us" />
      <WideReadableDiv>
        <div>
          <Row>
            <Col span={3}>Telegram</Col>
            <Col span={21}>{'@florist'}</Col>
          </Row>
          <Row>
            <Col span={3}>Address</Col>
            <Col span={21}>34 Webdings Avenue</Col>
          </Row>
        </div>
      </WideReadableDiv>
    </div>
  );
};

export default Contact;
