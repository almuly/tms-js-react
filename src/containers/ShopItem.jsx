import React from "react";
import { connect } from "react-redux";
import Cart from "./Cart";

import "../styles/containers/ShopItem.css";

const ShopItem = ({ products }) => (
  <>
    {products.map((product) => (
      <Cart key={product.id} product={product}  />
    ))}
  </>
);

const mapStateToProps = (state) => ({
  products: state.products.current,
});
export default connect(mapStateToProps)(ShopItem);
