import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Item from '../components/item/Item';
import { cartAdd } from '../redux/actions/cartActions';

const ItemScreen = ({ history, match, cartAdd }) => {
  const id = match.params.id;

  // TODO replace with call to API
  const item = {
    id: '43242',
    name: 'flower combi A',
    imgSrc: [
      'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      'https://files.gamebanana.com/img/ico/sprays/patrick_star_2_preview_2.png',
      'https://files.gamebanana.com/img/ico/sprays/patrick_star_2_preview_2.png',
      'https://files.gamebanana.com/img/ico/sprays/patrick_star_2_preview_2.png'
    ],
    price: {
      currency: 'SGD',
      value: '24.00'
    },
    description: 'The perfect bloom to suit your day.'
  };

  return <Item history={history} item={item} cartAdd={cartAdd} />;
};

ItemScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    cartAdd: ({ id }) => dispatch(cartAdd({ id, quantity: 1 }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ItemScreen));
