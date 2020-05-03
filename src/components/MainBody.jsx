import React, {Component} from 'react';
import {
    Route,
    Switch, Link
} from "react-router-dom";

import Cart from './Cart';
import ShopItem from './ShopItem.jsx';

import '../styles/components/MainBody.css';
import products from "../constants/products";

export default class MainBody extends Component {

    handleBasket(product) {
        return active => {
            if (active) {
                this.props.addToBasket(product);
            } else {
                this.props.removeFromBasket(product);
            }
        }
    }
    render() {

        return (

            <main className="products container">

                <Link to="/catalog">Catalog</Link>


                <Switch>
                    <Route path="/catalog/:id" >
                        <Cart products={products} handleBasket = {this.handleBasket} />
                    </Route>
                    <Route path="/catalog">
                        <ShopItem products={products}  handleBasket = {this.handleBasket}/>
                    </Route>


                </Switch>

            </main>
        );
    }
}
