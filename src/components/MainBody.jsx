import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Cart from "../containers/Cart";
import ShopItem from "../containers/ShopItem.jsx";

import "../styles/components/MainBody.css";

const MainBody = () => (
  <main className="products container">
    <Switch>
      <Route path="/catalog/:id" component={Cart} />
      <Route path="/" component={ShopItem} />
    </Switch>
  </main>
);
export default MainBody;
