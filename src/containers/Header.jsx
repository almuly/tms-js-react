import React, { useState } from "react";
import { array, shape, number, object } from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Search from "../components/Search";
import Basket from "../components/Basket";
import Logo from "../components/Logo";
import Cart from "./Cart";
import Modal from "../components/Modal";

import "../styles/containers/Header.css";
const Header = ({ basket, products }) => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };
  const closeModal = () => {
    setModalActive(false);
  };
 const {productIds} = basket;
    const basketProducts = products.filter((product) =>
    productIds.includes(product.id)
  );
  return (
    <div className="header">
      <div className=" header container row">
        <Logo />
        <Search />
        <Basket onClick={openModal} count={basket.count} amount={basket.amount} />
        <Modal display={modalActive} onClose={closeModal}>
          {basketProducts.length ? (
            basketProducts.map((product) => (
              <Cart
                key={product.id}
                product={product}
                productId={product.id}
              />
            ))
          ) : (
            <div>No money, no honey!</div>
          )}
        </Modal>
      </div>
    </div>
  );
};
Header.displayName = "Header";
Header.propTypes = {
  basket: shape({
    count: number.isRequired,
    amount: number.isRequired,
  }).isRequired,
  history: object.isRequired,
  products: array,
};
const mapStateToProps = (state) => ({
  basket: state.basket,
  products: state.products.current,
});
export default compose(withRouter, connect(mapStateToProps))(Header);
