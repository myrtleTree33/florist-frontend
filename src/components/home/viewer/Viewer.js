import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'antd';

import ViewerItem from './ViewerItem';
import WideReadableDiv from '../../util/WideReadableDiv';

const Viewer = () => {
  const items = [
    {
      id: '43242',
      name: 'flower combi A',
      imgSrc: [
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg',
        'https://www.fleurboutique.sg/wp-content/uploads/Cotton-Magic-50-688x688.jpg'
      ],
      price: {
        currency: 'SGD',
        value: '24.00'
      },
      description: 'The perfect bloom to suit your day.'
    },

    {
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
    },

    {
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
    },

    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
  ];

  return (
    <WideReadableDiv>
      <List
        grid={{ gutter: 30, column: 3 }}
        dataSource={items}
        renderItem={item => (
          <List.Item>
            <ViewerItem {...item} />
          </List.Item>
        )}
      />
    </WideReadableDiv>
  );
};

export default Viewer;
