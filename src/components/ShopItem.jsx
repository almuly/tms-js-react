import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../styles/components/ShopItem.css';
import '../styles/components/PurchaseButton.css';
import {Link} from "react-router-dom";


import PurchaseButton from './PurchaseButton';


export default class ShopItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            currency: [],
            products: []
        };
    }


    componentDidMount() {
        fetch("http://www.nbrb.by/api/exrates/rates/usd?parammode=2")
            .then(res => res.json())
            .then(
                currency => {
                    this.setState({
                        isLoaded: false,
                        currency
                    });
                })
            .catch(err => {
                console.log(err);
                this.setState({
                    isLoaded: false
                });
            })

    }


    render() {
        const {error, isLoaded, currency} = this.state;
        const {products} = this.props;

        return (


            products.map((product) => {

                return (
                    <div className="container" key={product.id}>
                        <div className="item">
                            <div className="shop__img-wrap">
                                <img className="shop__img" src={product.imageLink} alt=""/>
                            </div>
                            <div className="shop__text">
                                <Link to={`/catalog/${product.id}`}><p className="shop__title">
                                    {product.title}</p></Link>
                                <p className="shop__description"
                                   dangerouslySetInnerHTML={{__html: product.description}}/>
                            </div>

                            <div className="button__price-block">
                                <p>{product.price.value * currency.Cur_OfficialRate} </p>
                                <PurchaseButton onClick={this.handleBasket(product)}/>
                            </div>

                        </div>

                    </div>

                )

            }))

    }
}
