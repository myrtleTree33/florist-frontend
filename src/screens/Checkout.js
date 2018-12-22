import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkout from '../components/checkout/Checkout';

class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: '13242',
          name: 'flower config A',
          quantity: 3,
          imgSrc:
            'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        },
        {
          id: '1231221',
          name: 'flower config B',
          quantity: 5,
          imgSrc:
            'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        }
      ],
      personalMessage: 'Personal message field',
      specialRequest: 'Special request field',
      checkoutDetails: null
    };
  }

  render() {
    const onSubmit = checkoutDetails => {
      this.setState({ checkoutDetails });
    };

    const { state } = this;
    return <Checkout cart={state} onSubmit={onSubmit} />;
  }
}

CheckoutScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default CheckoutScreen;
