import React, { useState,useLayoutEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { addToBasket, removeFromBasket } from "../actions";

import "../styles/components/PurchaseButton.css";
import classNames from "classnames";

const PurchaseButton = ({
  addToBasket,
  removeFromBasket,
  product,
  ...props
}) => {
  const [active, setActive] = useState({ flag: false });
  useLayoutEffect(() => {

    if (props.basket.productIds.includes(product.id)) {
      setActive({ flag: true });
    } else {
      setActive({ flag: false });
    }
  }, [props.basket, product]);

  const handleClick = (event) => {
    event.preventDefault();
    const payload = { productId: product.id, priceValue: product.price.value };
    active.flag ? removeFromBasket(payload) : addToBasket(payload);
  };
  const text = active.flag ? "Remove from Basket" : "Add to Basket";

  return (
    <a
      href="#"
      className={classNames("purchase__button", { __active: active.flag })}
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket,
});
const mapDispatchToProps = {
  addToBasket,
  removeFromBasket,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  PurchaseButton
);
