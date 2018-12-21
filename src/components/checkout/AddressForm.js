import React from 'react';
import PropTypes from 'prop-types';
import { Select, Row, Col, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import PageHeader from '../util/PageHeader';

const FormItem = Form.Item;

const AddressForm = ({ form, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        onSubmit(values);
      }
    });
  };

  const { getFieldDecorator } = form;

  return (
    <div>
      <PageHeader text="Recipient's Address" headerSize={2} position="left" />

      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 500
        }}
      >
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(<Input placeholder="Email" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('phoneNumber', {
            rules: [{ required: true, message: 'Please input your email!' }]
          })(<Input placeholder="Phone number" />)}
        </FormItem>

        <Row gutter={24}>
          <Col span={12}>
            <FormItem>
              {getFieldDecorator('firstName', {
                rules: [
                  {
                    required: true,
                    message: 'Please specify your first name.'
                  }
                ]
              })(<Input placeholder="First name" />)}
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem>
              {getFieldDecorator('lastName', {
                rules: [
                  {
                    required: true,
                    message: 'Please specify your last name.'
                  }
                ]
              })(<Input placeholder="Last name" />)}
            </FormItem>
          </Col>
        </Row>

        <FormItem>
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your address!' }]
          })(<Input placeholder="Address" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('city', {
            rules: [{ required: true, message: 'Please input your city!' }]
          })(<Input placeholder="City" />)}
        </FormItem>

        <Row gutter={24}>
          <Col span={12}>
            <FormItem>
              {getFieldDecorator('select', {
                rules: [
                  { required: true, message: 'Please select your country!' }
                ]
              })(
                <Select placeholder="Country">
                  <Select.Option value="sg">Singapore</Select.Option>
                </Select>
              )}
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem>
              {getFieldDecorator('postalCode', {
                rules: [
                  { required: true, message: 'Please input your postal code!' }
                ]
              })(<Input placeholder="Postal code" />)}
            </FormItem>
          </Col>
        </Row>

        <BrowserView>
          <FormItem>
            <span>
              <Link to="/cart">Back to cart</Link>
            </span>
            <span
              style={{
                float: 'right'
              }}
            >
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                style={{
                  marginTop: '1rem'
                }}
              >
                Proceed to payment
              </Button>
            </span>
          </FormItem>
        </BrowserView>

        <MobileView>
          <FormItem>
            <div>
              <Button
                block
                htmlType="submit"
                type="primary"
                size="large"
                style={{
                  marginTop: '1rem'
                }}
              >
                Proceed to payment
              </Button>
            </div>
            <div>
              <Link to="/cart">Back to cart</Link>
            </div>
          </FormItem>
        </MobileView>
      </Form>
    </div>
  );
};

export default Form.create()(AddressForm);
