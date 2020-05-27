import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import numberView from "../helpers/numberView";

import PurchaseButton from "../components/PurchaseButton";

import "../styles/containers/ShopItem.css";

const Cart = ({ products, ...props }) => {
  const [product = {}, setProduct] = useState({ price: {} });
  const params = useParams();
  useEffect(() => {
    const { id } = params;

    if (products.length && id) {
      const stateProduct = products.find((item) => item.id === id);
      setProduct(stateProduct);
    } else if (props.product) {
      setProduct(props.product);
    }
  }, []);
  const { value: priceValue = 0 } = product.price;
  return (
    <div className="container">
      <div className="item">
        <div className="shop__img-wrap">
          <img
            className="shop__img"
            src={product.imageLink}
            alt={product.title}
          />
        </div>
        <div className="shop__text">
          <Link to={`/catalog/${product.id}`}>
            <p className="shop__title">{product.title}</p>
          </Link>
          <p
            className="shop__description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
        <div className="button__price-block">
          <p>
            {numberView(priceValue)}
            {product.price.currency}{" "}
          </p>
          <PurchaseButton product={product}  />
        </div>
      </div>
    </div>
  );
};

Cart.displayName = "Cart";
const mapStateToProps = (state) => ({
  products: state.products.current,
});
export default compose(connect(mapStateToProps))(Cart);
