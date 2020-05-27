import React, {useState} from "react";
import { sortProductsAsc,
    sortProductsDesc } from "../actions";
import { compose } from "redux";
import { connect } from "react-redux";

import "../styles/components/HeaderMainBody.css";

const HeaderMainBody = ({sortProductsAsc,  sortProductsDesc, products}) => {
    const [active, setActive] = useState ({ flag:false });
    const handleClick = (event) => {
        event.preventDefault ();
        setActive ((prevState) => ({ flag:!prevState.flag }));
        active.flag ? sortProductsAsc():sortProductsDesc();
    }
    console.log (products.sortDirection);
    return (
        <div className="products__header container">
            <h3>Electronics</h3>
            <div>
                Sort by price:
                <a id="sort" href="#" className="products__sort" onClick={handleClick}>
                    {products.sortDirection}
                </a>
            </div>
        </div>
    )
};

const mapDispatchToProps = {
  sortProductsAsc,
  sortProductsDesc,

};
const mapStateToProps =(state) =>({
    products:state.products,
});
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  HeaderMainBody
);
