import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarginDiv from '../util/MarginDiv';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(x) {
    this.setState({ x });
  }

  render() {
    const { x } = this.state;
    const { item } = this.props;
    const { id, name, imgSrc, price, description } = item;
    const { currency, value } = price;

    return (
      <div
        style={{
          margin: '0 4rem'
        }}
      >
        <div>
          <img
            src={imgSrc[x]}
            style={{
              maxWidth: '100%'
            }}
          />
        </div>
        <div
          style={{
            margin: '1.5rem 0',
            textAlign: 'center'
          }}
        >
          {imgSrc.map((im, i) => (
            <span
              style={{
                margin: '.5rem'
              }}
            >
              <img
                src={im}
                style={{
                  maxWidth: 70
                }}
                onClick={() => this.handleChange(i)}
              />
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
