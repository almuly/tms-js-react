import React, {memo, useEffect } from "react";
import { bool, func } from "prop-types";

/*import { hot } from "react-hot-loader";*/
import { connect } from "react-redux";
import { compose } from "redux";

import Loader from "../components/Loader";
import Header from "./Header.jsx";
import MainBody from "../components/MainBody.jsx";
import HeaderMainBody from "../components/HeaderMainBody";

import "../styles/containers/App.css";
import {
   startLoader,
  endLoader,
  addProducts,
} from "../actions";

const App =({load, ...props})=>{
  useEffect(()=>{
   props.startLoader();

    setTimeout(() => {
      Promise.all([
        fetch("/api/catalog").then((response) => response.json()),
        fetch("http://www.nbrb.by/api/exrates/rates/usd?parammode=2").then((response) => response.json()),
      ])

          .then(([products, nbrb]) => {
            props.addProducts(products.map(product => {
                  product.price.value *= nbrb.Cur_OfficialRate;
                  product.price.currency = "BYN";

                  return product;

                }).sort((a, b) => a.price.value - b.price.value)

            );

            props.endLoader();
          })
          .catch((err) => {
            console.log(err);
            props.endLoader();
          });
    }, 3000);

      },[]);

  return (
      <>
        <Loader display={load} />
        <Header />
        <HeaderMainBody />
        <MainBody />
      </>
  );

};

const mapDispatchToProps = {
  startLoader,
  endLoader,
  addProducts,
};
const mapStateToProps = (state) => ({
  load: state.load,
});

App.propTypes = {
  load: bool.isRequired,
  startLoader: func.isRequired,
  endLoader: func.isRequired,
  addProducts: func.isRequired,
};
export default compose(connect(mapStateToProps, mapDispatchToProps),memo,)(App);
