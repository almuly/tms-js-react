import React, { Component } from 'react';

import '../styles/components/Basket.css';

export default class Basket extends Component {
  render() {
    return (
      <div className="Basket">
        <div>
          Basket
          <span id="count" className="basket__count">{this.props.count}</span>
        </div>
        <div className="basket__amount">
          amount:
          <span id="amount">{this.props.amount}$</span>
        </div>
      </div>


    );
  }
}
