import React, {Component} from 'react';
import {
    Route,
    HashRouter, Link
} from "react-router-dom";


import ShopItem from './ShopItem.jsx';

import '../styles/components/MainBody.css';
import products from "../constants/products";

export default class MainBody extends Component {
    render() {

        return (

            <main className="products container">
                <Link to="/catalog">Catalog</Link>
            <Route path="/catalog" component  = {ShopItem}>

            </Route>
                <Route path="/:id">
                    <ShopItem product={products} {...this.props}/>
                </Route>
            </main>


        );
    }
}
export default MainBody;