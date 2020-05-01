import React, { Component } from 'react';

import '../styles/components/HeaderMainBody.css';
import ShopItem from "./ShopItem";
export default class HeaderMainBody extends Component {
    render() {
        return (
                <div className="products__header container">
                    <h3>Electronics</h3>
                    <div>
                        Sort by price:
                        <a id="sort" href="#" className="products__sort">Asc</a>
                    </div>
                </div>


        );
    }
}
export default HeaderMainBody;