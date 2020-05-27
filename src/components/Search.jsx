import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {  searchProducts } from "../actions";

import "../styles/components/Search.css";

const Search = ({products, ...props}) => {
  const handleInput =(event)=> {
      event.preventDefault ();
      props.searchProducts({products, searchString:event.target.value})
  };
    return (
      <form>
        <input
          id="search"
          className="header__search"
          type="text"
          placeholder="Search"
          onChange={handleInput}
        />
      </form>
    );

}
const mapStateToProps = (state) => ({
    products: state.products.current,
});
const mapDispatchToProps = {
    searchProducts,
};
export default compose(
connect (mapStateToProps, mapDispatchToProps)
)(Search);