import React, { Component } from 'react';
import './Menu.scss'
import PropTypes from 'prop-types';

Menu.propTypes = {
  count: PropTypes.number,
};

class Menu extends Component {

  render() {
    return (
        <div className={'menu'}>
            <div className={'store-name'}>Store</div>
            <div className={'store-icon'}>
                <img src={'123'} alt={'menu'}/>
              <div>{this.props.count}</div>
            </div>
        </div>
    );
  }
}

export default Menu;
