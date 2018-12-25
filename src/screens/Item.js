import React from 'react';
import PropTypes from 'prop-types';

import Item from '../components/item/Item';

const ItemScreen = ({ match }) => {
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

  return <Item item={item} />;
};

ItemScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default ItemScreen;
