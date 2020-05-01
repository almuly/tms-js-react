import React, { Component } from 'react';

import '../styles/components/Search.css';

export default class Search extends Component {
  render() {
    return (
      <form>
        <input id="search" className="header__search" type="text" placeholder="Search" />
      </form>
    );
  }
}
export default Search;