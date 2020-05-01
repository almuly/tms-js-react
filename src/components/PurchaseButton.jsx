import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../styles/components/PurchaseButton.css';
import classNames from 'classnames';

export default class PurchaseButton extends Component {

    constructor(props) {
        super(props);
        this.state = {active: false};

        this.handleClick = this.handleClick.bind(this);

    }


    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({active: !prevState.active}), () => {
            this.props.onClick(this.state.active);
        });

    }

    render() {
        const {active} = this.state;

        const text = active ? 'Remove from Basket' : 'Add to Basket';

console.log(this.props);
        return (

            <a href="#" className={classNames('purchase__button', {'__active': active})}
               onClick={this.handleClick}>{text}</a>

        )
    }
}
export default PurchaseButton;