import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Search from './Search';
import Basket from './Basket';
import Logo from './Logo';

import '../styles/components/Header.css';

export default class Header extends Component {

  render() {
      const {count, amount} = this.props.basket;
    return (
      <div className="header">
        <div className="container header__container row">
          <Logo />
          <Search />
          <Basket count={count} amount={amount} />
        </div>
      </div>

    );
  }
}
export default Header;