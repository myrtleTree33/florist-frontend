import React from 'react';
import PropTypes from 'prop-types';

import Home from '../components/home/Home';

const HomeScreen = ({ history }) => {
  const items = [
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    },
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    },
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    },
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    },
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    },
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    },
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    },
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    },
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    },
    {
      id: '43242',
      name: 'flower combi A',
      gist: 'The perfect bloom to suit your day.',
      landscapeImg:
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description:
        'The perfect bloom to suit your day, Algio is the next bloom for you.'
    }
  ];

  return <Home items={items} history={history} />;
};

HomeScreen.propTypes = {
  //   name: PropTypes.string.isRequired
};

export default HomeScreen;
