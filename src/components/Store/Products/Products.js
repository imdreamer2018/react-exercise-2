import React, { Component } from 'react';
import PropTypes from 'prop-types';

Products.propTypes = {
  increment: PropTypes.any,
  category: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.any,
};

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: this.props.onclick,
      category: this.props.category,
      name: this.props.name,
      price: this.props.price,
    };
  }

  render() {
    return (
        <div className={'products'}>
          <div className={'product-name'}>{this.state.name}</div>
          <div className={'product-price'}>{this.state.price}</div>
          <button onClick={this.state.increment}>add</button>
        </div>
    );
  }
}

export default Products;
